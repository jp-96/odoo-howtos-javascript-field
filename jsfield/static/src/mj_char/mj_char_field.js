/** @odoo-module */

import { registry } from "@web/core/registry";
import { CharField } from "@web/views/fields/char/char_field";
import { Component, xml } from "@odoo/owl";

class MjCharField extends CharField {}

registry.category("fields").add("MjChar", MjCharField);
