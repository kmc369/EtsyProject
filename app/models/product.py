from .db import db,environment,SCHEMA,add_prefix_for_prod

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
    creator = db.Column(db.String(1000), nullable=False)
    material=db.Column(db.String(1000))
    description =  db.Column(db.String(100000), nullable=False)
    
    