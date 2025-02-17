class ProductResponse:
    @staticmethod
    def to_dict(product):
        return {
            'id': product.id,
            'name': product.name,
            'description': product.description,
            'price': product.price,
            'stock': product.stock
        }