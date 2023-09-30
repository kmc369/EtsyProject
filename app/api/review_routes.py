from flask import Blueprint, jsonify, request 
from flask_login import login_required
from app.models import Review,db
from ..forms.review_form import ReviewForm
from .aws_helpers import get_unique_filename,upload_file_to_s3,remove_file_from_s3


review_bp = Blueprint('reviews', __name__)

@review_bp.route("/<int:product_id>",methods=["GET"])
def product_reviews(product_id):
    reviews = Review.query.filter_by(product_id=product_id)
    if not reviews:
        return jsonify({"message": "No Reviews Found"})
    return [review.to_dict() for review in reviews]

    
@review_bp.route("/new_review",methods=["POST"])
def create_review():
    """create a review"""
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_review = Review(
            stars = form.data['stars'],
            description = form.data['description'],
            user_id = form.data['user_id'],
            product_id = form.data['product_id']
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return jsonify({"error": form.errors}), 400