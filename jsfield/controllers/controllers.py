# -*- coding: utf-8 -*-
# from odoo import http


# class Jsfield(http.Controller):
#     @http.route('/jsfield/jsfield', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/jsfield/jsfield/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('jsfield.listing', {
#             'root': '/jsfield/jsfield',
#             'objects': http.request.env['jsfield.jsfield'].search([]),
#         })

#     @http.route('/jsfield/jsfield/objects/<model("jsfield.jsfield"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('jsfield.object', {
#             'object': obj
#         })
