from flask import Blueprint, jsonify, request 
from flask_login import login_required
from app.models import Product,ShoppingCart,db
from ..forms.product_form import ProductForm
from .aws_helpers import get_unique_filename,upload_file_to_s3,remove_file_from_s3

shopping_bp = Blueprint('shopping_cart', __name__)


@shopping_bp.route("/<int:product_id>/<int:shopping_cart_id>", methods=["POST"])
def get_product(product_id,shopping_cart_id):

    product_to_add = Product.query.get(product_id)
    user_cart = ShoppingCart.query.get(shopping_cart_id)
    
    if product_to_add and user_cart:
     
        user_cart.products.append(product_to_add)
        db.session.commit()
        
        return jsonify({"message": "Product added to the shopping cart successfully"})
    else:
        return jsonify({"error": "Product or shopping cart not found"}), 404