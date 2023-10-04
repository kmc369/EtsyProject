from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_products():
    product1 = Product(
        price= 17.90,
        image= 'https://i.etsystatic.com/36401895/r/il/aa05ef/4782689222/il_794xN.4782689222_3rdq.jpg',
        image1= 'https://i.etsystatic.com/36401895/r/il/75a5cc/4830944321/il_794xN.4830944321_q9h1.jpg',
        image2= 'https://i.etsystatic.com/36401895/r/il/815281/4830944319/il_794xN.4830944319_lhds.jpg',
        image3= 'https://i.etsystatic.com/42714551/r/il/78690c/5042706966/il_794xN.5042706966_mxln.jpg',
        title= 'Spooky Stitch Halloween Glass Can - 16 oz Libbey Drinkware, Cute and Creepy: Stitch Halloween Can, Halloween-themed 16 oz Libbey Glass Can',
        handmade= True,
        vintage=False,
        made_to_order=True,
        creator= 'Lilo and Stitch Co.',
        material= 'Plasticm wood, glass',
        description= '16 oz Frosted Glass Libbey Sublimation Can Tumbler with Bamboo Lid and Clear Straw. These designs were heat pressed on the glass. No vinyl was used so no peeling on the design. Wash gently to avoid scratches on surface.',
        user_id= 1,  
        shopping_cart_id=None,  
        
    )
    product2 = Product(
        price=75.50,
        image='https://i.etsystatic.com/6436456/r/il/55da5b/5057661177/il_794xN.5057661177_st7t.jpg',
        image1='https://i.etsystatic.com/6436456/r/il/4f2164/5057657859/il_794xN.5057657859_35s7.jpg',
        image2='https://i.etsystatic.com/6436456/r/il/b96a9e/5057660887/il_794xN.5057660887_hlad.jpg',
        image3='https://i.etsystatic.com/6436456/r/il/cd5e9b/5057662971/il_794xN.5057662971_7vxg.jpg',
        title='Montessori Climbing Arch, arch Pillow, Handmade Montessori Toys, Cushion Climb Arch,Arch Rocker Pillow,Wooden baby gym, Montessori rocker',
        handmade=True,
        vintage=False,
        made_to_order=True,
        creator='Furniture Emporium',
        material='Wood',
        description='This climbing gym system was designed to enhance play, creativity, balance control, and motor skill development. This modifiable triangle is perfect for children ages 6 months to 5 years of age.',
        user_id=1,
        shopping_cart_id=None
    )

    product3 = Product(
        price=120.00,
        image='https://i.etsystatic.com/36384481/r/il/34a7fe/4095485060/il_794xN.4095485060_cpw5.jpg',
        image1='https://i.etsystatic.com/36384481/r/il/37fa6f/4095485504/il_794xN.4095485504_4ehp.jpg',
        image2='https://i.etsystatic.com/36384481/r/il/f460bc/4551095205/il_794xN.4551095205_960y.jpg',
        image3='https://i.etsystatic.com/36384481/r/il/37fa6f/4095485504/il_794xN.4095485504_4ehp.jpg',
        title='Viking Wooden Wizard Wand, Hand-Carved Wands, harry potter wand, Handmade beautiful magic wand is ideal as a gift for a novice wizard',
        vintage=True,
        handmade=True,
        made_to_order=True,
        creator='Retro Revival',
        material='Leather and Wood, and phoenix feathers ',
        description='The wand is made of black sage solid wood, suitable for carving small and delicate details, not easily broken. The edges of the magic wand are carved and touched by hand, meticulously every detail, the appearance is thorough, smooth finished. You will feel it right from the first touch!',
        user_id=1,
        shopping_cart_id=None
    )


  
    product4 = Product(
        price=85.00,
        image='https://example.com/product5_image.jpg',
        image1='https://example.com/product5_image1.jpg',
        image2='https://example.com/product5_image2.jpg',
        image3='https://example.com/product5_image3.jpg',
        title='Elegant Crystal Chandelier',
        handmade=False,
        vintage=False,
        made_to_order=False,
        creator='Luxury Lights',
        material='Crystal and Metal',
        description='Illuminate your space with our elegant crystal chandelier. The shimmering crystals and modern design will add a touch of sophistication to any room.',
        user_id=2,
        shopping_cart_id=None
    )


    product5 = Product(
        price=65.00,
        image='https://example.com/product6_image.jpg',
        image1='https://example.com/product6_image1.jpg',
        image2='https://example.com/product6_image2.jpg',
        image3='https://example.com/product6_image3.jpg',
        title='Stainless Steel Kitchen Utensil Set',
        handmade=False,
        vintage=False,
        made_to_order=False,
        creator='KitchenCraft Co.',
        material='Stainless Steel',
        description='Upgrade your kitchen with our high-quality stainless steel utensil set. The sleek design and durable construction make cooking a breeze.',
        user_id=2,
        shopping_cart_id=None
    )


    product6 = Product(
        price=150.00,
        image='https://example.com/product7_image.jpg',
        image1='https://example.com/product7_image1.jpg',
        image2='https://example.com/product7_image2.jpg',
        image3='https://example.com/product7_image3.jpg',
        title='Handwoven Wool Area Rug',
        handmade=True,
        vintage=True,
        made_to_order=False,
        creator='RugCraft Artisans',
        material='Wool',
        description='Add warmth and style to your home with our handwoven wool area rug. The intricate patterns and soft texture make it a perfect choice for any room.',
        user_id=2,
        shopping_cart_id=None
    )

    product7 = Product(
        price=95.00,
        image='https://example.com/product8_image.jpg',
        image1='https://example.com/product8_image1.jpg',
        image2='https://example.com/product8_image2.jpg',
        image3='https://example.com/product8_image3.jpg',
        title='Digital Smart Thermostat',
        handmade=False,
        vintage=True,
        made_to_order=False,
        creator='Tech Innovations',
        material='Plastic and Metal',
        description="Control your home's temperature with our digital smart thermostat. The user-friendly interface and energy-saving features make it a must-have for modern homes.",
        user_id=4,
        shopping_cart_id=None
    )

# Product 9
    product8 = Product(
        price=120.00,
        image='https://example.com/product9_image.jpg',
        image1='https://example.com/product9_image1.jpg',
        image2='https://example.com/product9_image2.jpg',
        image3='https://example.com/product9_image3.jpg',
        title='Vintage Inspired Wall Clock',
        handmade=True,
        vintage=True,
        made_to_order=False,
        creator='Timeless Designs',
        material='Wood and Metal',
        description='Add a vintage touch to your space with our beautifully crafted wall clock. The combination of wood and metal creates a timeless and stylish look.',
        user_id=4,
        shopping_cart_id=None
    )

# Product 10
    product9 = Product(
        price=110.00,
        image='https://example.com/product10_image.jpg',
        image1='https://example.com/product10_image1.jpg',
        image2='https://example.com/product10_image2.jpg',
        image3='https://example.com/product10_image3.jpg',
        title='Sculptural Ceramic Vase',
        handmade=True,
        vintage=True,
        made_to_order=False,
        creator='Artistic Pottery',
        material='Ceramic',
        description='Enhance your home decor with our sculptural ceramic vase. The unique design and craftsmanship make it a striking centerpiece for any room.',
        user_id=4,
        shopping_cart_id=None
    )
    
#     # Product 11
    product10 = Product(
        price=90.00,
        image='https://example.com/product11_image.jpg',
        image1='https://example.com/product11_image1.jpg',
        image2='https://example.com/product11_image2.jpg',
        image3='https://example.com/product11_image3.jpg',
        title='Hand-Painted Canvas Art',
        handmade=True,
        vintage=False,
        made_to_order=False,
        creator='ArtisticExpressions Studio',
        material='Canvas and Acrylic Paint',
        description='Bring creativity to your walls with our hand-painted canvas art. Each piece is a unique expression of artistic vision, making it a standout in any space.',
        user_id=2,
        shopping_cart_id=None
      )

# # Product 12
#     product12 = Product(
#         price=75.00,
#         image='https://example.com/product12_image.jpg',
#         image1='https://example.com/product12_image1.jpg',
#         image2='https://example.com/product12_image2.jpg',
#         image3='https://example.com/product12_image3.jpg',
#         title='Handmade Ceramic Mug Set',
#         handmade=True,
#         vintage=True,
#         made_to_order=True,
#         creator='ClayCraft Studios',
#         material='Ceramic',
#         description='Sip your favorite beverages in style with our handmade ceramic mug set. Each mug is crafted with care, adding an artisan touch to your daily routine.',
#         user_id=5,
#         shopping_cart_id=None
#     )

# # Product 13
#     product13 = Product(
#         price=120.00,
#         image='https://example.com/product13_image.jpg',
#         image1='https://example.com/product13_image1.jpg',
#         image2='https://example.com/product13_image2.jpg',
#         image3='https://example.com/product13_image3.jpg',
#         title='Macramé Wall Hanging',
#         handmade=True,
#         vintage=False,
#         made_to_order=True,
#         creator='BohoCraft Creations',
#         material='Cotton Rope',
#         description='Elevate your space with our macramé wall hanging. The intricate knots and natural fibers create a boho-chic vibe, making it a focal point in any room.',
#         user_id=5,
#         shopping_cart_id=None
#         )

# # Product 14
#     product14 = Product(
#         price=95.00,
#         image='https://example.com/product14_image.jpg',
#         image1='https://example.com/product14_image1.jpg',
#         image2='https://example.com/product14_image2.jpg',
#         image3='https://example.com/product14_image3.jpg',
#         title='Hand-Embroidered Throw Pillow',
#         handmade=True,
#         vintage=True,
#         made_to_order=True,
#         creator='StitchCraft Artisans',
#         material='Cotton Fabric',
#         description='Add a touch of texture to your decor with our hand-embroidered throw pillow. The delicate embroidery and soft fabric create a cozy and stylish accent.',
#         user_id=5,
#         shopping_cart_id=None
#     )

# # Product 15
#     product15 = Product(
#         price=110.00,
#         image='https://example.com/product15_image.jpg',
#         image1='https://example.com/product15_image1.jpg',
#         image2='https://example.com/product15_image2.jpg',
#         image3='https://example.com/product15_image3.jpg',
#         title='Custom Nameplate Necklace',
#         handmade=True,
#         vintage=False,
#         made_to_order=True,
#         creator='ArtistryInMetal Jewelry',
#         material='Sterling Silver',
#         description='Wear your name close to your heart with our custom nameplate necklace. Each piece is handcrafted in sterling silver for a personalized and timeless accessory.',
#         user_id=3,
#         shopping_cart_id=None
#     )
#     product16 = Product(
#         price=80.00,
#         image='https://example.com/product16_image.jpg',
#         image1='https://example.com/product16_image1.jpg',
#         image2='https://example.com/product16_image2.jpg',
#         image3='https://example.com/product16_image3.jpg',
#         title='Antique Brass Table Lamp',
#         handmade=False,
#         vintage=True,
#         made_to_order=True,
#         creator='Vintage Finds Co.',
#         material='Brass',
#         description='Illuminate your space with our antique brass table lamp. The vintage design and brass construction add a touch of old-world charm to any room.',
#         user_id=6,
#         shopping_cart_id=None
#     )

# # Product 17
#     product17 = Product(
#         price=95.00,
#         image='https://example.com/product17_image.jpg',
#         image1='https://example.com/product17_image1.jpg',
#         image2='https://example.com/product17_image2.jpg',
#         image3='https://example.com/product17_image3.jpg',
#         title='Retro Vinyl Record Player',
#         handmade=False,
#         vintage=True,
#         made_to_order=True,
#         creator='Retro Audio Co.',
#         material='Plastic and Metal',
#         description='Experience the nostalgia of vinyl with our retro record player. The vintage-inspired design and modern features make it a perfect addition to your music setup.',
#         user_id=6,
#         shopping_cart_id=None
#     )

# # Product 18
#     product18 = Product(
#         price=120.00,
#         image='https://example.com/product18_image.jpg',
#         image1='https://example.com/product18_image1.jpg',
#         image2='https://example.com/product18_image2.jpg',
#         image3='https://example.com/product18_image3.jpg',
#         title='Mid-Century Modern Armchair',
#         handmade=True,
#         vintage=False,
#         made_to_order=True,
#         creator='Modern Living Designs',
#         material='Wood and Fabric',
#         description='Add a touch of mid-century modern style to your home with our handcrafted armchair. The wooden frame and sleek fabric upholstery create a timeless look.',
#         user_id=7,
#         shopping_cart_id=None
#     )

# # Product 19
#     product19 = Product(
#         price=100.00,
#         image='https://example.com/product19_image.jpg',
#         image1='https://example.com/product19_image1.jpg',
#         image2='https://example.com/product19_image2.jpg',
#         image3='https://example.com/product19_image3.jpg',
#         title='Vintage Leather Suitcase',
#         handmade=False,
#         vintage=True,
#         made_to_order=True,
#         creator='Traveler\'s Treasures',
#         material='Leather and Metal',
#         description='Travel in style with our vintage leather suitcase. The worn leather and sturdy metal accents give it a timeless appeal for your adventures.',
#         user_id=7,
#         shopping_cart_id=None
#     )
    
#     product20 = Product(
#             price=85.00,
#             image='https://example.com/product20_image.jpg',
#             image1='https://example.com/product20_image1.jpg',
#             image2='https://example.com/product20_image2.jpg',
#             image3='https://example.com/product20_image3.jpg',
#             title='Vintage Tea Set',
#             handmade=False,
#             vintage=True,
#             made_to_order=True,
#             creator='TeaTime Antiques',
#             material='Porcelain',
#             description='Enjoy tea time in classic style with our vintage tea set. The delicate porcelain and timeless design make it a charming addition to your collection.',
#             user_id=6,
#             shopping_cart_id=None
#     )

# # Product 21
#     product21 = Product(
#         price=110.00,
#         image='https://example.com/product21_image.jpg',
#         image1='https://example.com/product21_image1.jpg',
#         image2='https://example.com/product21_image2.jpg',
#         image3='https://example.com/product21_image3.jpg',
#         title='Antique Silver Pocket Watch',
#         handmade=False,
#         vintage=True,
#         made_to_order=True,
#         creator='Timeless Timepieces',
#         material='Silver',
#         description='Add a touch of vintage elegance to your attire with our antique silver pocket watch. The intricate details and classic design make it a timeless accessory.',
#         user_id=3,
#         shopping_cart_id=None
#     )

# # Product 22
#     product22 = Product(
#         price=95.00,
#         image='https://example.com/product22_image.jpg',
#         image1='https://example.com/product22_image1.jpg',
#         image2='https://example.com/product22_image2.jpg',
#         image3='https://example.com/product22_image3.jpg',
#         title='Victorian Lace Parasol',
#         handmade=True,
#         vintage=True,
#         made_to_order=True,
#         creator='LaceCraft Creations',
#         material='Lace and Wood',
#         description='Step back in time with our handmade Victorian lace parasol. The delicate lace and wooden handle evoke the charm of a bygone era.',
#         user_id=1,
#         shopping_cart_id=None
#     )
    
    

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    # db.session.add(product11)
    # db.session.add(product12)
    # db.session.add(product13)
    # db.session.add(product14)
    # db.session.add(product15)
    # db.session.add(product16)
    # db.session.add(product17)
    # db.session.add(product18)
    # db.session.add(product19)
    # db.session.add(product20)
    # db.session.add(product21)
    # db.session.add(product22)
   
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
        
    db.session.commit()