from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text



def seed_review():
    review1 = Review(stars=5,description="This product exceeded my expectations. Highly recommended!",product_id=8, user_id=2)
    review2 = Review(stars=4, description="Good product, but could use some improvements.", product_id=8, user_id=1)
    review3 = Review(stars=5, description="Impressive quality! I'm satisfied with my purchase.", product_id=1, user_id=3)
    review4 = Review(stars=3, description="Not bad, but I expected more features.", product_id=8, user_id=4)
    review5 = Review(stars=4, description="Reliable and durable. I recommend it!", product_id=1, user_id=5)
    review6 = Review(stars=5, description="Fantastic product! Exceeded my expectations.", product_id=1, user_id=6)
    review7 = Review(stars=4, description="Solid performance. Good value for the price.", product_id=2, user_id=7)
    review8 = Review(stars=5, description="I love this product! It's a game-changer.", product_id=2, user_id=6)
    review9 = Review(stars=3, description="Decent quality, but the design could be better.", product_id=2, user_id=5)
    review10 = Review(stars=5, description="Absolutely amazing! Would buy again.", product_id=2, user_id=4)
    review11 = Review(stars=5, description="Well-designed product with a few minor flaws. Overall satisfied.",product_id=9, user_id=2)
    review12 = Review(stars=4, description="Met my basic needs but lacked some advanced features. Average purchase.", product_id=9, user_id=1)
    review13 = Review(stars=5, description="Exceptional performance! This product exceeded my high expectations.", product_id=9, user_id=3)
    review14 = Review(stars=3, description="Disappointed with the quality. Not worth the investment.", product_id=3, user_id=1)
    review15 = Review(stars=4, description="Reliable and durable. I recommend it!", product_id=3, user_id=2)
    review16 = Review(stars=5, description="Fantastic product! Exceeded my expectations.", product_id=3, user_id=3)
    review17 = Review(stars=4, description="Solid performance. Good value for the price.", product_id=3, user_id=4)
    review18 = Review(stars=5, description="I love this product! It's a game-changer.", product_id=3, user_id=5)
    review19 = Review(stars=3, description="Decent quality, but the design could be better.", product_id=3, user_id=6)
    review11 = Review(stars=5, description="Absolutely amazing! Would buy again.", product_id=3, user_id=7)
    review11 = Review(stars=4, description="Well-designed product with a few minor flaws. Overall satisfied.", product_id=4, user_id=1)
    review12 = Review(stars=3, description="Met my basic needs but lacked some advanced features. Average purchase.", product_id=4, user_id=2)
    review13 = Review(stars=5, description="Exceptional performance! This product exceeded my high expectations.", product_id=4, user_id=3)
    review14 = Review(stars=2, description="Disappointed with the quality. Not worth the investment.", product_id=4, user_id=4)
    review15 = Review(stars=4, description="Reliable and durable. A dependable choice for everyday use.", product_id=4, user_id=5)
    review16 = Review(stars=5, description="Absolutely phenomenal! The best product I've ever purchased.", product_id=4, user_id=6)
    review17 = Review(stars=3, description="Decent quality, but the user interface could be more user-friendly.", product_id=4, user_id=7)
    review18 = Review(stars=4, description="Consistent performance. Great value for the price point.", product_id=9, user_id=2)
    review19 = Review(stars=5, description="Highly recommended! Exceeded my expectations in every aspect.", product_id=9, user_id=1)
    review20 = Review(stars=3, description="Average product. Not bad, but there are better options available.", product_id=9, user_id=3)
    review21 = Review(stars=4, description="Solid performance. Good value for the money.", product_id=5, user_id=4)
    review22= Review(stars=5, description="Outstanding product! Exceeded my expectations.", product_id=5, user_id=6)
    review23 = Review(stars=3, description="Decent quality, but could use some improvements.", product_id=5, user_id=7)
    review24= Review(stars=4, description="Reliable and durable. A dependable choice for everyday use.", product_id=5, user_id=1)
    review25 = Review(stars=5, description="Absolutely phenomenal! The best product I've ever purchased.", product_id=5, user_id=2)
    review26 = Review(stars=3, description="Average product. Not bad, but there are better options available.", product_id=5, user_id=3)
    
    review27 =Review(stars=5, description="Top-notch quality! Surpassed all my expectations.", product_id=6, user_id=4)
    review28= Review(stars=2, description="Disappointed with the quality. Needs significant improvement.", product_id=6, user_id=5)
    review29 = Review(stars=4, description="Reliable and durable. Definitely a good purchase.", product_id=6, user_id=6)
    review30 = Review(stars=3, description="Met my basic needs but lacked some advanced features. Average purchase.", product_id=6, user_id=7)
    review31 = Review(stars=5, description="Exceptional performance! This product exceeded my high expectations.", product_id=6, user_id=1)
    
    review32= Review(stars=4, description="Well-designed product with a few minor flaws. Overall satisfied.", product_id=10, user_id=1)
    review33= Review(stars=3, description="Decent quality, but the user interface could be more user-friendly.", product_id=10, user_id=2)
    review34= Review(stars=5, description="Highly recommended! Exceeded my expectations in every aspect.", product_id=2, user_id=3)
    review35= Review(stars=3, description="Solid performance. Great value for the price point.", product_id=2, user_id=4)
    review36= Review(stars=5, description="Absolutely outstanding! This product is a game-changer.", product_id=7, user_id=5)
    review37= Review(stars=4, description="Consistent performance. Great value for the price point.", product_id=7, user_id=6)
    review38= Review(stars=5, description="Highly recommended! Will definitely consider buying again.", product_id=7, user_id=7)
    review39= Review(stars=3, description="Average product. Not bad, but there are better options available.", product_id=7, user_id=7)
    
    review40 = Review(stars=4, description="Solid product with room for improvement. Enjoying it overall.", product_id=1, user_id=1)
    review41 = Review(stars=5, description="Absolutely outstanding! Will buy again.", product_id=1, user_id=3)
    review42 = Review(stars=3, description="Decent quality, but lacking some features.", product_id=3, user_id=2)
    review43 = Review(stars=4, description="Reliable and sturdy. Great for everyday use. Happy with my purchase.", product_id=1, user_id=4)
    review44 = Review(stars=5, description="Highly recommended! Exceeded my expectations in every aspect.", product_id=8, user_id=5)
    
    review45 = Review(stars=4, description="Solid product with room for improvement. Enjoying it overall.", product_id=3, user_id=1)
    review46 = Review(stars=3, description="Met my expectations but didn't exceed them. Decent buy.", product_id=3, user_id=2)
    review46 = Review(stars=5, description="Top-notch quality! Surpassed all my expectations.", product_id=3, user_id=7)
    review47 = Review(stars=2, description="Disappointed with the product. Needs significant improvement.", product_id=3, user_id=6)
    review48 = Review(stars=4, description="Reliable and durable. Definitely a good purchase.", product_id=3, user_id=5)
    review49 = Review(stars=5, description="Absolutely outstanding! This product is a game-changer.", product_id=3, user_id=4)
    review50 = Review(stars=3, description="Decent quality, but could benefit from additional features.", product_id=10, user_id=1)
    review51 = Review(stars=4, description="Solid performance. Great value for the money.", product_id=10, user_id=2)
    review52 = Review(stars=5, description="Highly recommended! Will definitely consider buying again.", product_id=10, user_id=3)
    
    
    
    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review30)
    db.session.add(review31)
    db.session.add(review32)
    db.session.add(review33)
    db.session.add(review34)
    db.session.add(review35)
    db.session.add(review36)
    db.session.add(review37)
    db.session.add(review38)
    db.session.add(review39)
    db.session.add(review40)
    db.session.add(review41)
    db.session.add(review42)
    db.session.add(review43)
    db.session.add(review44)
    
    db.session.add(review45)
    db.session.add(review46)
    db.session.add(review47)
    db.session.add(review48)
    db.session.add(review49)
    db.session.add(review50)
    db.session.add(review51)
    db.session.add(review52)
  
    
    db.session.commit()
    
def undo_review():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        
    db.session.commit()

