from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password',
        image="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg")
    marnie = User(
        username='Marnie', email='marnie@aa.io', password='password',
        image="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg")
    bobbie = User(
        username='Bobbie', email='bobbie@aa.io', password='password',
        image="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg")
    jane = User(
        username='Jane', email='jane@aa.io', password='password',
        image="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg")
    bella = User(
        username='Bella', email='bella@aa.io', password='password', 
        image="https://static-cdn.jtvnw.net/jtv_user_pictures/7d691b26-1a61-411b-b388-1328863d0cc0-profile_image-300x300.png")
    olivia = User(
        username='Olivia', email='olivia@aa.io', password='password', 
        image="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg")
    matthew = User(
        username='Matthew', email='Matthew@aa.io', password='password', 
        image="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg")
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(jane)
    db.session.add(bella)
    db.session.add(olivia)
    db.session.add(matthew)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()