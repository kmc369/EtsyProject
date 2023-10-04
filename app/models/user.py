from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(2000),nullable=True)
    #relationships if you were to delete a use you should cascade all 
    products = db.relationship("Product", back_populates="user", cascade="all, delete-orphan")
    reviews = db.relationship("Review", back_populates="user",cascade="all, delete-orphan")
    shopping_cart = db.relationship('ShoppingCart', back_populates='user', uselist=False)
    
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'image':self.image,
            'products': [product.to_dict() for product in self.products],  
            'shopping_cart': self.shopping_cart.to_dict() if self.shopping_cart else None,  
            'reviews': [review.to_dict() for review in self.reviews],  
        }
