/** @odoo-module */

import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { Component, xml } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class MyTextField extends Component {

    onChange(e) {
        this.props.update(e.target.value);
    }
}

MyTextField.template = xml`
    <input t-att-id="props.id" class="text-danger" t-att-value="props.value" t-on-change="onChange" />
`;
MyTextField.props = {
    ...standardFieldProps,
};
MyTextField.supportedTypes = ["char"];

registry.category("fields").add("my_text_field", MyTextField);
