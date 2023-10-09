from flask_wtf import FlaskForm
from wtforms import StringField, validators
from wtforms.validators import DataRequired, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists,validators.Length(min=6,max=50, message="User Name must be between 4-20 character")])
    email = StringField('email', validators=[DataRequired(), user_exists,validators.Length(min=6,max=50, message="Email must be between 4-20 character"),validators.Email(message="Must be a valid email trying using @")])
    password = StringField('password', validators=[DataRequired(),validators.Length(min=5,max=50, message="Password must be between 4-20 character")])