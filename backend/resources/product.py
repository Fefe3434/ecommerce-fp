from http import HTTPStatus
from flask import request
from database import db
from models.product import Product
from models.product_response import ProductResponse
from resources.base_resource import BaseResource

def handle_exceptions(func):
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            return {"message": "Erreur interne du serveur", "error": str(e)}, HTTPStatus.INTERNAL_SERVER_ERROR
    return wrapper

def validate_json_request(func):
    def wrapper(*args, **kwargs):
        if not request.get_json():
            return {"message": "Requête invalide, données JSON requises"}, HTTPStatus.BAD_REQUEST
        return func(*args, **kwargs)
    return wrapper

def check_product_existence(func):
    def wrapper(self, id, *args, **kwargs):
        product = self.db_model.query.get(id)
        if not product:
            return {"message": "Produit non trouvé"}, HTTPStatus.NOT_FOUND
        return func(self, id, product, *args, **kwargs)
    return wrapper


class Products(BaseResource):
    def __init__(self):
        super().__init__(db_model=Product, response_model=ProductResponse)

    @handle_exceptions
    def get(self, id=None):  
        if id:
            product = self.db_model.query.get(id)  
            if not product:
                return {"message": "Produit non trouvé"}, HTTPStatus.NOT_FOUND
            return self.response_model.to_dict(product), HTTPStatus.OK
        
        products = self.db_model.query.all()
        return [self.response_model.to_dict(p) for p in products], HTTPStatus.OK

    @handle_exceptions
    @validate_json_request
    def post(self):
        data = request.get_json()
        new_product = self.db_model(**data)
        db.session.add(new_product)
        db.session.commit()
        return {"message": "Produit créé", "id_product": new_product.id}, HTTPStatus.CREATED

    @handle_exceptions
    @validate_json_request
    @check_product_existence
    def put(self, id, product):  
        data = request.get_json()
        for key, value in data.items():
            setattr(product, key, value)
        db.session.commit()
        return {"message": "Produit mis à jour", "id_product": id}, HTTPStatus.OK

    @handle_exceptions
    @check_product_existence
    def delete(self, id, product):
        db.session.delete(product)
        db.session.commit()
        return {"message": "Produit supprimé"}, HTTPStatus.OK
