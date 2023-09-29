from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired
from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from flask_wtf.file import FileField, FileRequired,FileAllowed,BooleanField,FieldList
from wtforms.validators import DataRequired

 
ALLOWED_EXTENSIONS = {"pdf", "png", "jpg", "jpeg", "gif"}

class Product(FlaskForm):
    price = IntegerField("price", validators=[DataRequired()])
    image = FileField("Image file", validators=[FileRequired,FileAllowed(list(ALLOWED_EXTENSIONS))])
    image1 = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    image2 = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    image3 = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    title = StringField("title",validators=[DataRequired()])
    handmade = BooleanField("handmade",validators=[DataRequired()])
    vintage =BooleanField("vintage",validators=[DataRequired()])
    made_to_order = BooleanField("made_to_order",validators=[DataRequired()])
    creator  = StringField("creator",validators=[DataRequired()])
    material = StringField("material",validators=[DataRequired()])
    description = StringField("description",validators=[DataRequired()])
    shopping_cart_id = IntegerField("shopping_cart")
    user_id = IntegerField('User ID', validators=[DataRequired()])
    # reviews = FieldList(StringField("reviews"), min_entries=0, validators=[DataRequired()])
