from flask import Flask
from flask_restful import Api
from database import db
from resources.product import Products
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = os.getenv('SQLALCHEMY_TRACK_MODIFICATIONS') == 'True'

CORS(app, resources={r"/*": {"origins": "*"}},
     allow_headers=["Content-Type", "Authorization", "If-None-Match"],
     methods=["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
     supports_credentials=True
)

db.init_app(app)
api = Api(app)

with app.app_context():
    db.create_all()

api.add_resource(Products, '/products', '/product', '/product/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)