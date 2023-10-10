from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField, validators
from wtforms.validators import DataRequired
from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,BooleanField,FieldList, FloatField
from flask_wtf.file import FileField, FileRequired,FileAllowed
from wtforms.validators import DataRequired

 
ALLOWED_EXTENSIONS = {"pdf", "png", "jpg", "jpeg", "gif"}
# FileRequired()
class ProductForm(FlaskForm):
    price = FloatField("price", validators=[DataRequired(), validators.NumberRange(min=0.01, message="Price must be greater than 0")])
    image = FileField("Image file", validators=[FileRequired(),FileAllowed(list(ALLOWED_EXTENSIONS))])
    image1 = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    image2 = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    image3 = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    title = StringField("title",validators=[DataRequired(),validators.Length(min=6,max=100, message="title must have a minium of 6 characters")])
    handmade = BooleanField("handmade")
    vintage =BooleanField("vintage")
    made_to_order = BooleanField("made_to_order")
    creator  = StringField("creator",validators=[DataRequired(),validators.Length(min=6,max=100, message="creator must have a minium of 6 characters")])
    material = StringField("material",validators=[DataRequired(),validators.Length(min=6,max=100, message="materials must have a minium of 6 characters")])
    description = StringField("description",validators=[DataRequired(),validators.Length(min=30,max=100, message="must have a minium of 30 characters")])
    user_id = IntegerField('User ID', validators=[DataRequired()])
