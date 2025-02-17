from flask_restful import Resource


class BaseResource(Resource):
    def __init__(self, db_model, response_model):
        self.db_model = db_model
        self.response_model = response_model