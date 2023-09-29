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
        return jsonify({"message": "Post not found"}, 404)
    for product in products:
        productList.append(product.to_dict())
    
    return jsonify(productList)

@products_bp.route('/<int:userid>',methods=["GET"])
def get_product_by_id(userid):
    """get all products by their product id"""
    products = Product.query.filter_by(user_id=userid)
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
    
    
        
        
    
    
    
    
    
    
    
#     @post_bp.route("/new_post/photo", methods=["POST"])
# def new_photo_post():
#     """
#     Photo post method 
#     """
#     form = PostForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         image = form.data["second_content"]
#         image.filename = get_unique_filename(image.filename)
#         upload = upload_file_to_s3(image)
#         print("upload is ", upload)
#         if "url" not in upload:
#             return jsonify({"error": "Failed to upload image to S3"}), 400

#         new_post = TextPost(
#             title = form.data["title"],
#             text_content = form.data['text_content'],
#             user_id = form.data['user_id'],
#             post_type = form.data['post_type'],
#             second_content = upload["url"]
#         )
        
#         db.session.add(new_post)
#         db.session.commit()
#         return jsonify(new_post.to_dict(), 201)
#     return {'error'}
    