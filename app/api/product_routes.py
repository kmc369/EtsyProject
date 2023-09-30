from flask import Blueprint, jsonify, request 
from flask_login import login_required
from app.models import Product,User,db
from ..forms.product_form import ProductForm
from .aws_helpers import get_unique_filename,upload_file_to_s3,remove_file_from_s3


products_bp = Blueprint('products', __name__)

@products_bp.route("/", methods=["GET"])
def get_all_products():
    """this method will get all the products we have """
    products = Product.query.all()
    productList = []
    if not products:
        return jsonify({"message": "Product not found"}, 404)
    for product in products:
        productList.append(product.to_dict())
    
    return jsonify(productList)

@products_bp.route('/<int:userid>',methods=["GET"])
def get_product_by_user_id(userid):
    """get all products of user """
    products = Product.query.filter_by(user_id=userid)
    if products is None:
        return jsonify({"message": "Product not found"}, 404)
    return [product.to_dict() for product in products]

@products_bp.route('/new_product', methods=["POST"])
def create_product():
 
    """create a new product """
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
     
        # image = form.data["image"]
        # image.filename = get_unique_filename(image.filename)
        # upload = upload_file_to_s3(image)
        # if "url" not in upload:
        #     return jsonify({"error": "Failed to upload image to S3"}), 400
        # image_url = upload["url"]
        
        # image1 = form.data["image1"]
        # image1.filename = get_unique_filename(image1.filename)
        # upload1 = upload_file_to_s3(image1)
        # if "url" not in upload1:
        #     return jsonify({"error": "Failed to upload image1 to S3"}), 400
        # image1_url = upload1["url"]

        # image2 = form.data["image2"]
        # image2.filename = get_unique_filename(image2.filename)
        # upload2 = upload_file_to_s3(image2)
        # if "url" not in upload2:
        #     return jsonify({"error": "Failed to upload image2 to S3"}), 400
        # image2_url = upload2["url"]

        # image3 = form.data["image3"]
        # image3.filename = get_unique_filename(image3.filename)
        # upload3 = upload_file_to_s3(image3)
        # if "url" not in upload3:
        #     return jsonify({"error": "Failed to upload image3 to S3"}), 400
        # image3_url = upload3["url"]
        
        new_product = Product(
            price=form.data["price"],
            # image=image_url,
            # image1=image1_url,
            # image2=image2_url,
            # image3=image3_url,
            image=form.data["image"],
            image1=form.data["image1"],
            image2=form.data["image2"],
            image3=form.data["image3"],
            title=form.data["title"],
            handmade=form.data["handmade"],
            vintage=form.data["vintage"],
            made_to_order=form.data["made_to_order"],
            creator=form.data["creator"],
            material=form.data["material"],
            description=form.data["description"],
            user_id=form.data["user_id"] 
            
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify(new_product.to_dict(), 201)
    else:
        return jsonify({"error": form.errors}), 400
    
@products_bp.route("/update/<int:product_id>", methods=["PUT"])
def update_product(product_id):
  
    product  = Product.query.get(product_id)
  
    if product is None:
        return jsonify({"Product not found"}), 404
    
    data = request.get_json()
    
    print("the data is ", data)
    
    if 'price' in data:
        product.price= data['image']
    if 'image' in data:
        product.image = data['image']
    if 'image1' in data:
        product.image1 = data['image1']
    if 'image2' in data:
        product.image2 = data['image2']
    if 'image3' in data:
        product.image3 = data['image3']
    if 'title' in data:
        product.title = data['title']
    if 'handmade' in data:
        product.handmade = data['handmade']
    if 'vintage' in data:
        product.vintage = data['vintage']
    if 'made_to_order' in data:
        product.made_to_order = data['made_to_order']
    if 'creator' in data:
        product.creator = data['creator']
    if 'material' in data:
        product.material = data['material']
    if 'description' in data:
        product.description = data['description']
    if 'user_id' in data:
        product.user_id = data['user_id']
   
    
    db.session.commit()

    return jsonify(product.to_dict())
        
    
    
    
    
    
    
@products_bp.route('/delete/<int:product_id>',methods=["DELETE"])
def delete_product(product_id):
    product = Product.query.get(product_id)
    if product is None:
        return jsonify({"message": "Product not found"}, 404)
    else:
        db.session.delete(product)
        db.session.commit()
    return jsonify({"message":"Successfully deleted"},201)
    