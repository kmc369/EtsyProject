from .db import db,environment,SCHEMA,add_prefix_for_prod
from datetime import datetime

class Product(db.Model):
    __tablename__ = "products"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String(2000), nullable=False)
    image1=db.Column(db.String(2000),nullable=True)
    image2=db.Column(db.String(2000),nullable=True)
    image3=db.Column(db.String(2000),nullable=True)
    title = db.Column(db.String(3000), nullable=False)
    handmade = db.Column(db.Boolean)
    vintage = db.Column(db.Boolean)
    made_to_order = db.Column(db.Boolean)
    creator = db.Column(db.String(1000), nullable=False)
    material=db.Column(db.String(1000))
    description =  db.Column(db.String(100000), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    #foreign keys 
    shopping_cart_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("shopping_carts.id")),nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)

    #relationsips 
    user = db.relationship("User", back_populates="products")
    reviews = db.relationship("Review", back_populates="products", cascade="all, delete-orphan")
    shopping_cart = db.relationship("ShoppingCart",back_populates="products")
    
    def add_prefix_for_prod(attr):
        if environment == "production":
            return f"{SCHEMA}.{attr}"
        else:
            return attr
    
    def to_dict(self):
            return {
            'id': self.id,
            'price': self.price,
            'image': self.image,
            'image1': self.image1,
            'image2': self.image2,
            'image3': self.image3,
            'title': self.title,
            'handmade': self.handmade,
            'creator': self.creator,
            'material': self.material,
            'description': self.description,
            'created_at': self.created_at.isoformat(),  # Convert datetime to string
            'updated_at': self.updated_at.isoformat() if self.updated_at else None, 
            'user_id': self.user_id,
            'shopping_cart_id': self.shopping_cart_id,
            
            'user': {
                "id": self.user.id,
                "username": self.user.username,
                "email": self.user.email
            },
            'reviews': [review.to_dict() for review in self.reviews]  # Assuming you have a to_dict method in your Review model

            # Add more attributes as needed
        }
