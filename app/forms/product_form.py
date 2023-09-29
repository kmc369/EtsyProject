from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired
from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,BooleanField,FieldList
from flask_wtf.file import FileField, FileRequired,FileAllowed
from wtforms.validators import DataRequired

 
ALLOWED_EXTENSIONS = {"pdf", "png", "jpg", "jpeg", "gif"}
# FileRequired()
class ProductForm(FlaskForm):
    price = IntegerField("price", validators=[DataRequired()])
    image = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    image1 = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    image2 = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    image3 = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    title = StringField("title",validators=[DataRequired()])
    handmade = BooleanField("handmade")
    vintage =BooleanField("vintage")
    made_to_order = BooleanField("made_to_order")
    creator  = StringField("creator",validators=[DataRequired()])
    material = StringField("material",validators=[DataRequired()])
    description = StringField("description",validators=[DataRequired()])
    user_id = IntegerField('User ID', validators=[DataRequired()])
