from .db import db,environment,SCHEMA,add_prefix_for_prod
from datetime import datetime


class ShoppingCart(db.Model):
    __tablename__ = "shopping_carts"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    
    #foreign
    
    #relationships
    products = db.relationship("Product", back_populates="shopping_cart", cascade="all, delete-orphan")
    user = db.relationship('User', back_populates='shopping_cart')

    def add_prefix_for_prod(attr):
        if environment == "production":
            return f"{SCHEMA}.{attr}"
        else:
            return attr
    
    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'products': [product.to_dict() for product in self.products],  # Assuming you have a to_dict method in your Product model

          
        }