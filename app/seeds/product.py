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
        image='https://i.etsystatic.com/16123146/r/il/19ea8f/5293725553/il_794xN.5293725553_8zak.jpg',
        image1='https://i.etsystatic.com/16123146/r/il/11e633/5360391165/il_794xN.5360391165_8ubn.jpg',
        image2='https://i.etsystatic.com/16123146/r/il/ebfcf5/5360391169/il_794xN.5360391169_jf7x.jpg',
        image3='https://i.etsystatic.com/16123146/r/il/7e04a6/5245542532/il_794xN.5245542532_igjv.jpg',
        title='John Legend Creator Collab | Hand-built Organic Ceramic Vases, Speckled Vase, Marbled Vase, Natural & Minimalistic Vase',
        handmade=True,
        vintage=False,
        made_to_order=False,
        creator='Vase and More',
        material='Ceramic',
        description='Mother Nature was a significant influence in the design of these vases, which is reflected in the curved, earth-toned, and hand-built nature of these vases. The speckled ceramic vases are each built by hand with durable stoneware and finished with a satin glaze, while the marbled ceramic vases are a combination of two durable stonewares finished with a clear glaze.',
        user_id=2,
        shopping_cart_id=None
    )


    product5 = Product(
        price=65.00,
        image='https://i.etsystatic.com/40991023/r/il/0cc3a4/4929994815/il_794xN.4929994815_ok73.jpg',
        image1='https://i.etsystatic.com/40991023/r/il/9e2207/4929995591/il_794xN.4929995591_3ph0.jpg',
        image2='https://i.etsystatic.com/40991023/r/il/f14f0c/4881716226/il_794xN.4881716226_fvmb.jpg',
        image3='https://i.etsystatic.com/40991023/r/il/f790de/4929994859/il_794xN.4929994859_1z99.jpg',
        title='Yggdrasil Colorful Mosaic Painting, Tree of Life Artwork, Stained Glass Canvas Print, Norse Mythology Art, Mythology Gift, Celtic Artwork',
        handmade=True,
        vintage=False,
        made_to_order=True,
        creator='Glass Season.',
        material='glass, paint',
        description="This Mythology Gift is not just a piece of art; it's a doorway to another world. The Celtic Artwork element adds a touch of mysticism. Brighten your home with this enchanting creation, perfect for art lovers and those drawn to the magic of mythology. Experience the wonder every day.",
        user_id=2,
        shopping_cart_id=None
    )


    product6 = Product(
        price=150.00,
        image='https://i.etsystatic.com/29336514/r/il/7b95ae/4908692894/il_794xN.4908692894_m2p2.jpg',
        image1='https://i.etsystatic.com/29336514/r/il/bd3670/4956950095/il_794xN.4956950095_dq76.jpg',
        image2='https://i.etsystatic.com/29336514/r/il/815953/5252300278/il_794xN.5252300278_jjj4.jpg',
        image3='https://i.etsystatic.com/29336514/r/il/bc45e9/5300489327/il_794xN.5300489327_mt2r.jpg',
        title='Japanese Cat Glass Cup for Women, Cute Cat Gifts For Women, Wood, Japanese Cat Frosted Can, Cat Lover Iced Coffee Can, Cat Frosted Glass Can',
        handmade=True,
        vintage=True,
        made_to_order=False,
        creator='The Cup Store',
        material='Wool',
        description='Our 16 oz Frosted Glass Can Tumbler, designed to elevate your drinking experience. Crafted with premium materials and modern aesthetics, this tumbler is the perfect addition to your drinkware collection.',
        user_id=1,
        shopping_cart_id=None
    )

    product7 = Product(
        price=95.00,
        image='https://i.etsystatic.com/24150074/r/il/296237/5119025627/il_794xN.5119025627_il3a.jpg',
        image1='https://i.etsystatic.com/24150074/r/il/4aa263/5119023489/il_794xN.5119023489_khmr.jpg',
        image2='https://i.etsystatic.com/24150074/r/il/7418c0/5119023423/il_794xN.5119023423_4k7x.jpg',
        image3='https://i.etsystatic.com/24150074/r/il/2e4c32/5119022553/il_794xN.5119022553_4d4x.jpg',
        title='Woman Portrait Art, Funny Art, Girl Money Art, Painting, Boss Lady Art, Girl With Cash, funny, Boho Art',
        handmade=True,
        vintage=False,
        made_to_order=True,
        creator='The Ladies',
        material='Paint, canvas',
        description="New Painting, to help with sadness, heartbreak or just for a funny moment , rack , stacks and prosperity, success.",
        user_id=3,
        shopping_cart_id=None
    )

# Product 9
    product8 = Product(
        price=12.97,
        image='https://i.etsystatic.com/46406397/r/il/26a534/5389459791/il_794xN.5389459791_j5o2.jpg',
        image1='https://i.etsystatic.com/42128291/r/il/55d1e6/5229125143/il_794xN.5229125143_by02.jpg',
        image2='https://i.etsystatic.com/42128291/r/il/47a4da/5228991881/il_794xN.5228991881_45no.jpg',
        image3='https://i.etsystatic.com/46406397/r/il/109d5e/5389511301/il_794xN.5389511301_638z.jpg',
        title='Naruto Printed Poster, painting - Home Decoration for Anime Lovers - Wall Art - Gift for Naruto Fans - Naruto Printed Picture - Anime Wall Art',
        handmade=True,
        vintage=True,
        made_to_order=False,
        creator='Timeless Designs',
        material='poster, painting',
        description='Do you want to add a unique anime theme to your home decoration? Then this Naruto anime printed poster is for you! A stunning design of Naruto Uzumaki will fill your walls and home with the magic of the anime world.',
        user_id=3,
        shopping_cart_id=None
    )

# Product 10
    product9 = Product(
        price=110.00,
        image='https://i.etsystatic.com/22470627/r/il/24f061/5054324750/il_794xN.5054324750_rt44.jpg',
        image1='https://i.etsystatic.com/22470627/r/il/fed773/5097807973/il_794xN.5097807973_iw2p.jpg',
        image2='https://i.etsystatic.com/22470627/r/il/fdedc2/5097808119/il_794xN.5097808119_8xk3.jpg',
        image3='https://i.etsystatic.com/22470627/r/il/fed773/5097807973/il_794xN.5097807973_iw2p.jpg',
        title='Birth Month Flower Bouquet Charm Necklace, Mothers day Jewelry Gift, Best Friend, Birthday Present, Christmas Present',
        handmade=True,
        vintage=True,
        made_to_order=False,
        creator='The Jewelry Place',
        material='Gold, Rose Gold, silver',
        description=' 💎 Personalize this piece with your own meaningful message. Personal, timeless pieces you’ll never want to take off - it is made to keep your sentiments close. All of our jewelry are hypoallergenic. We wish to create timeless, versatile pieces that everyone can enjoy and cherish, so we completely removed lead and nickel from our production.',
        user_id=2,
        shopping_cart_id=None
    )
    
#     # Product 11
    product10 = Product(
        price=90.00,
        image='https://i.etsystatic.com/26933694/r/il/bcb267/5173567623/il_794xN.5173567623_4owe.jpg',
        image1='https://i.etsystatic.com/26933694/r/il/7999f2/3543805249/il_794xN.3543805249_msmo.jpg',
        image2='https://i.etsystatic.com/26933694/r/il/bbf507/3594029812/il_794xN.3594029812_b369.jpg',
        image3='https://i.etsystatic.com/26933694/r/il/2282dd/3817043874/il_794xN.3817043874_7m5p.jpg',
        title='Vintage Alexandrite Ring,24k Rose Gold Vermeil, Jewelry Engagement Ring, Promise Ring, June Birthstone ring, Anniversary Gift for Her, promise ring',
        handmade=True,
        vintage=True,
        made_to_order=True,
        creator='ArtisticExpressions Studio',
        material='Better Jewelry',
        description='💎 Exceptional Handmade color-changing Alexandrite ring with total befitting with White Zircon gemstone delivered with elegant gift box.',
        user_id=1,
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