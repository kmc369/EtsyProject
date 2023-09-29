from flask import Blueprint, jsonify, request 
from flask_login import login_required
from app.models import Product,User

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

@products_bp.route('/', methods=["POST"])
def create_product():
    """create a new product """
    
    
    
    
    
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
    