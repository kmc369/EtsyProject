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

@products_bp.route('/<int:userid>')
def get_product_by_id(userid):
    """get all products by their product id"""
    products = Product.query.filter_by(user_id=userid)
    return [product.to_dict() for product in products]