from .db import db,environment,SCHEMA,add_prefix_for_prod
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    stars =  db.Column(db.Integer)
    description =  db.Column(db.String(100000), nullable=False)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    
    
    
    #foreign keys 
    product_id =  db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    
    #realtionships 
    products = db.relationship("Product", back_populates="reviews" )
    user  = db.relationship("User", back_populates="reviews")
   
    def add_prefix_for_prod(attr):
        if environment == "production":
            return f"{SCHEMA}.{attr}"
        else:
            return attr
        
    def to_dict(self):
            return {
            'id': self.id,
            'stars': self.stars,
            'description': self.description,
            'created_at': self.created_at.isoformat(),  # Convert datetime to string
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,  # Convert datetime to string (or None if not set)
            'product_id': self.product_id,
            'user_id': self.user_id,
            "user":{
               "id": self.user.id,
                "username": self.user.username,
                "email": self.user.email 
            },
            "products":{
                "id":self.products.id,
                "price":self.products.price,
                "title":self.products.title,
               
                
            }

            # Add more attributes as needed
        }
    
    
    