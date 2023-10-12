from app.models import db, ShoppingCart, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_shopping_cart():
    shoppingcart = ShoppingCart(
        user_id=1, 
     )
    shoppingcar2 = ShoppingCart(
        user_id=2, 
     
    )
    shoppingcar3 = ShoppingCart(
        user_id=3, 
     
    )
    shoppingcar4 = ShoppingCart(
        user_id=4, 
     
    )
    shoppingcar5 = ShoppingCart(
        user_id=5, 
     
    )
    
    shoppingcar6 = ShoppingCart(
        user_id=6, 
     
    )
    
    shoppingcar7 = ShoppingCart(
        user_id=7, 
     
    )
    
    
   
    db.session.add(shoppingcart)
    db.session.add(shoppingcar2)
    db.session.add(shoppingcar3)
    db.session.add(shoppingcar4)
    db.session.add(shoppingcar5)
    db.session.add(shoppingcar6)
    db.session.add(shoppingcar7)
  
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_shopping_cart():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.shopping_carts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM shopping_carts"))
        
    db.session.commit()