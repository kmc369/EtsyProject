from flask import Blueprint, jsonify, request 
from flask_login import login_required
from app.models import Product,db
from ..forms.product_form import ProductForm
from .aws_helpers import get_unique_filename,upload_file_to_s3,remove_file_from_s3



search_bp = Blueprint('search', __name__)

@search_bp.route("/<string:params>", methods=["GET"])
def search(params):
 
    
    results = Product.query.filter(Product.title.ilike(f"%{params}%")).all()
    return jsonify([result.to_dict() for result in results])