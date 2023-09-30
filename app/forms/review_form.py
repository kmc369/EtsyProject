from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired
from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,BooleanField,FieldList


class ReviewForm(FlaskForm):
    stars = IntegerField("star", validators=[DataRequired()])
    description = StringField("description",validators=[DataRequired()])
    user_id = IntegerField("user_id",validators=[DataRequired()])
    product_id = IntegerField("product_id",validators=[DataRequired()]) 