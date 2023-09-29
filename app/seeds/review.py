from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text



def seed_users():
    review1 = Review(stars=5,description="This product exceeded my expectations. Highly recommended!",product_id=1, user_id=2)
    review2 = Review(stars=4, description="Good product, but could use some improvements.", product_id=5, user_id=1)
    review3 = Review(stars=5, description="Impressive quality! I'm satisfied with my purchase.", product_id=10, user_id=3)
    review4 = Review(stars=3, description="Not bad, but I expected more features.", product_id=7, user_id=2)
    review5 = Review(stars=4, description="Reliable and durable. I recommend it!", product_id=15, user_id=1)
    review6 = Review(stars=5, description="Fantastic product! Exceeded my expectations.", product_id=3, user_id=2)
    review7 = Review(stars=4, description="Solid performance. Good value for the price.", product_id=12, user_id=3)
    review8 = Review(stars=5, description="I love this product! It's a game-changer.", product_id=20, user_id=1)
    review9 = Review(stars=3, description="Decent quality, but the design could be better.", product_id=8, user_id=2)
    review10 = Review(stars=5, description="Absolutely amazing! Would buy again.", product_id=22, user_id=3)
    
    review2 = Review(stars=4, description="Solid product with room for improvement. Enjoying it overall.", product_id=5, user_id=1)
    review3 = Review(stars=3, description="Met my expectations but didn't exceed them. Decent buy.", product_id=12, user_id=2)
    review4 = Review(stars=5, description="Top-notch quality! Surpassed all my expectations.", product_id=3, user_id=3)
    review5 = Review(stars=2, description="Disappointed with the product. Needs significant improvement.", product_id=7, user_id=1)
    review6 = Review(stars=4, description="Reliable and durable. Definitely a good purchase.", product_id=15, user_id=2)
    review7 = Review(stars=5, description="Absolutely outstanding! This product is a game-changer.", product_id=20, user_id=3)
    review8 = Review(stars=3, description="Decent quality, but could benefit from additional features.", product_id=8, user_id=1)
    review9 = Review(stars=4, description="Solid performance. Great value for the money.", product_id=10, user_id=2)
    review10 = Review(stars=5, description="Highly recommended! Will definitely consider buying again.", product_id=22, user_id=3)
    
    review11 = Review(stars=4, description="Well-designed product with a few minor flaws. Overall satisfied.", product_id=18, user_id=1)
    review12 = Review(stars=3, description="Met my basic needs but lacked some advanced features. Average purchase.", product_id=6, user_id=2)
    review13 = Review(stars=5, description="Exceptional performance! This product exceeded my high expectations.", product_id=11, user_id=3)
    review14 = Review(stars=2, description="Disappointed with the quality. Not worth the investment.", product_id=4, user_id=1)
    review15 = Review(stars=4, description="Reliable and durable. A dependable choice for everyday use.", product_id=9, user_id=2)
    review16 = Review(stars=5, description="Absolutely phenomenal! The best product I've ever purchased.", product_id=3, user_id=3)
    review17 = Review(stars=3, description="Decent quality, but the user interface could be more user-friendly.", product_id=16, user_id=1)
    review18 = Review(stars=4, description="Consistent performance. Great value for the price point.", product_id=19, user_id=2)
    review19 = Review(stars=5, description="Highly recommended! Exceeded my expectations in every aspect.", product_id=2, user_id=3)
    review20 = Review(stars=3, description="Average product. Not bad, but there are better options available.", product_id=14, user_id=1)
    
    
    review21 = Review(stars=4, description="Solid performance. Good value for the money.", product_id=1, user_id=2),
    review22= Review(stars=5, description="Outstanding product! Exceeded my expectations.", product_id=1, user_id=3),
    review23 = Review(stars=3, description="Decent quality, but could use some improvements.", product_id=1, user_id=1),
    review24= Review(stars=4, description="Reliable and durable. A dependable choice for everyday use.", product_id=1, user_id=2),
    review25 = Review(stars=5, description="Absolutely phenomenal! The best product I've ever purchased.", product_id=1, user_id=3),
    review26 = Review(stars=3, description="Average product. Not bad, but there are better options available.", product_id=1, user_id=1),
    
    review27 =Review(stars=5, description="Top-notch quality! Surpassed all my expectations.", product_id=2, user_id=3),
    review28= Review(stars=2, description="Disappointed with the quality. Needs significant improvement.", product_id=2, user_id=1),
    review29 = Review(stars=4, description="Reliable and durable. Definitely a good purchase.", product_id=2, user_id=2),
    review30 = Review(stars=3, description="Met my basic needs but lacked some advanced features. Average purchase.", product_id=2, user_id=3),
    review31 = Review(stars=5, description="Exceptional performance! This product exceeded my high expectations.", product_id=2, user_id=1),
    
    review32= Review(stars=4, description="Well-designed product with a few minor flaws. Overall satisfied.", product_id=3, user_id=1),
    review33= Review(stars=3, description="Decent quality, but the user interface could be more user-friendly.", product_id=3, user_id=2),
    review34= Review(stars=5, description="Highly recommended! Exceeded my expectations in every aspect.", product_id=3, user_id=3),
    review35= Review(stars=3, description="Solid performance. Great value for the price point.", product_id=3, user_id=1),
    review36= Review(stars=5, description="Absolutely outstanding! This product is a game-changer.", product_id=3, user_id=2),
    review37= Review(stars=4, description="Consistent performance. Great value for the price point.", product_id=3, user_id=3),
    review38= Review(stars=5, description="Highly recommended! Will definitely consider buying again.", product_id=3, user_id=1),
    review39= Review(stars=3, description="Average product. Not bad, but there are better options available.", product_id=3, user_id=2),
    
    review40 = Review(stars=4, description="Solid product with room for improvement. Enjoying it overall.", product_id=4, user_id=1),
    review41 = Review(stars=5, description="Absolutely outstanding! Will buy again.", product_id=4, user_id=3),
    review42 = Review(stars=3, description="Decent quality, but lacking some features.", product_id=4, user_id=2),
    review43 = Review(stars=4, description="Reliable and sturdy. Great for everyday use. Happy with my purchase.", product_id=4, user_id=1),
    review44 = Review(stars=5, description="Highly recommended! Exceeded my expectations in every aspect.", product_id=4, user_id=3),
    
    
    
    
    db.session.add(review1)
    
    db.session.commit()
    
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        
    db.session.commit()

