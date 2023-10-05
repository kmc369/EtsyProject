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

@products_bp.route('/user/<int:userid>',methods=["GET"])
def get_product_by_user_id(userid):
    """get all products of user """
    products = Product.query.filter_by(user_id=userid)
    if products is None:
        return jsonify({"message": "Product not found"}, 404)
    return [product.to_dict() for product in products]



@products_bp.route('/single_product/<int:product_id>',methods=["GET"])
def get_product_by_id(product_id):
    """get product by id"""
    single_product = Product.query.get(product_id)
    # print("the single post is ", single_product.to_dict())
    if single_product is None:
        return jsonify({"message": "Product not found"}, 404)
    return jsonify(single_product.to_dict())



@products_bp.route('/new_product', methods=["POST"])
def create_product():
    """create a new product """
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
     

        image = form.data.get("image")
        if image:
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
   
            if "url" not in upload:
                return jsonify({"error": "Failed to upload image to S3 1 "}), 400

        image1 = form.data.get("image1")
        if image1:
            image1.filename = get_unique_filename(image1.filename)
            upload1 = upload_file_to_s3(image1)
            if "url" not in upload1:
                return jsonify({"error": "Failed to upload image1 to S3 2"}), 400
            else:
                image1_url = upload1["url"]
        else:
        
            image1_url = ""

        image2 = form.data.get("image2")
        if image2:
            image2.filename = get_unique_filename(image2.filename)
            upload2 = upload_file_to_s3(image2)
            if "url" not in upload2:
                return jsonify({"error": "Failed to upload image2 to S3 3"}), 400
            else:
                image2_url = upload2["url"]
        else:
            image2_url = ""

        image3 = form.data.get("image3")
        if image3:
            image3.filename = get_unique_filename(image3.filename)
            upload3 = upload_file_to_s3(image3)
            if "url" not in upload3:
                return jsonify({"error": "Failed to upload image3 to S3 4"}), 400
            else:
                image3_url =  upload3["url"]
        else:
            image3_url = ""

        new_product = Product(
            price=form.data["price"],
            title=form.data["title"],
            image=upload["url"],
            image1=image1_url,
            image2=image2_url,
            image3=image3_url,
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
        return jsonify(new_product.to_dict())
    
    return jsonify({"error": form.errors}), 400
    
@products_bp.route("/update/<int:product_id>", methods=["PUT"])
def update_product(product_id):
  
    product  = Product.query.get(product_id)
    print("product", request.form)
    if product is None:
        return jsonify({"Product not found"}), 404
    
    # data = request.form
    form = ProductForm()
   
 
    print("the form data", form.data, "PLEAEEJSDKSAFGK:FSGSFG" )
  
    image = form.data.get("image")
    if image:
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        if "url" not in upload:
            return jsonify({"error": "Failed to upload image to S3 1 "}), 400

    image1 = form.data.get("image1")
    print("image 1 is", image1)
    if image1 and image1 !="null":
        print("how are we here if image1 is null")
        image1.filename = get_unique_filename(image1.filename)
        upload1 = upload_file_to_s3(image1)
        if "url" not in upload1:
            return jsonify({"error": "Failed to upload image1 to S3 2"}), 400
        else:
            image1_url = upload1["url"]
    else:
        image1_url = ""

    image2 = form.data.get("image2")
    if image2 and image2 !="null":
        image2.filename = get_unique_filename(image2.filename)
        upload2 = upload_file_to_s3(image2)
        if "url" not in upload2:
            return jsonify({"error": "Failed to upload image2 to S3 3"}), 400
        else:
            image2_url = upload2["url"]
    else:
        image2_url = ""

    image3 = form.data.get("image3")
    if image3 and image3 != "null":
        image3.filename = get_unique_filename(image3.filename)
        upload3 = upload_file_to_s3(image3)
        if "url" not in upload3:
            return jsonify({"error": "Failed to upload image3 to S3 4"}), 400
        else:
            image3_url = upload3["url"]
    else:
        image3_url = ""
   
    if 'price' in form.data:
        product.price= form.data['price']
    if 'image' in form.data:
        print("in image1 THE DATA",form.data["image"] )
        product.image = upload["url"]
    if 'image1' in form.data:
        product.image1 = image1_url
    if 'image2' in form.data:
        product.image2 = image2_url
    if 'image3' in form.data:
        product.image3 = image3_url
        
    if 'title' in form.data:
        product.title = form.data['title']
    if 'handmade' in form.data:
        if form.data['handmade']=='true':
            product.handmade = True
        else:
            product.handmade=False
       
    if 'vintage' in form.data:
        if form.data['vintage'] == 'true':
            product.vintage =True
        else:
            product.vintage=False
    if 'made_to_order' in form.data:
        if form.data['made_to_order'] =='true':
            product.made_to_order = True
        else:
            product.made_to_order = False
 
    if 'creator' in form.data:
        product.creator = form.data['creator']
    
    if 'material' in form.data:
        product.material = form.data['material']
    if 'description' in form.data:
        product.description = form.data['description']
    if 'user_id' in form.data:
        product.user_id = form.data['user_id']

    print("the neCAPITALis 2@#@@#$#@#$#$%*(%^@#$#$) ", product.to_dict())
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
    new_products = Product.query.all()
    return jsonify([product.to_dict() for product in new_products])
    