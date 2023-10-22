# -*- coding: utf-8 -*-

from odoo import models, fields, api


class jsfield(models.Model):
    _name = 'jsfield.jsfield'
    _description = 'jsfield.jsfield'

    name = fields.Char()
    value = fields.Integer()
    value2 = fields.Float(compute="_value_pc", store=True)
    description = fields.Text()
    late_order = fields.Boolean(default=False)
    my_text = fields.Char()

    @api.depends('value')
    def _value_pc(self):
        for record in self:
            record.value2 = float(record.value) / 100
