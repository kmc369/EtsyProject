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

        return [product.to_dict() for product in user_cart.products]
    else:
        return jsonify({"error": "Product or shopping cart not found"}), 404

@shopping_bp.route("/delete/<int:product_id>/shopping_cart/<int:shopping_cart_id>", methods=["DELETE"])
def delete_product(product_id, shopping_cart_id):
  
    user_cart = ShoppingCart.query.get(shopping_cart_id)
    
    if user_cart:
        updated_products = [product for product in user_cart.products if product.id != product_id]
        # user_cart.products = updated_products
        db.session.commit()

        product_to_delete = Product.query.get(product_id)
        if product_to_delete:
            product_to_delete.shopping_cart = None
            db.session.commit()

        updated_products_dict = [product.to_dict() for product in updated_products]
        print('updated products is', updated_products)
        return jsonify(updated_products_dict)

    return jsonify({"error": "Shopping cart or product not found"}), 404


    
    