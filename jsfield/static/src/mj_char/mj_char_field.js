/** @odoo-module */

import { registry } from "@web/core/registry";
import { CharField } from "@web/views/fields/char/char_field";
import { Component, xml } from "@odoo/owl";

class MjCharField extends CharField {}

// MjCharField.template = "web.CharField";
// MjCharField.components = {
//     TranslationButton,
// };
// MjCharField.defaultProps = { dynamicPlaceholder: false };
// MjCharField.props = {
//     ...standardFieldProps,
//     autocomplete: { type: String, optional: true },
//     isPassword: { type: Boolean, optional: true },
//     placeholder: { type: String, optional: true },
//     dynamicPlaceholder: { type: Boolean, optional: true},
//     shouldTrim: { type: Boolean, optional: true },
//     maxLength: { type: Number, optional: true },
//     isTranslatable: { type: Boolean, optional: true },
// };

// MjCharField.displayName = _lt("Text");
// MjCharField.supportedTypes = ["char"];

// MjCharField.extractProps = ({ attrs, field }) => {
//     return {
//         shouldTrim: field.trim && !archParseBoolean(attrs.password), // passwords shouldn't be trimmed
//         maxLength: field.size,
//         isTranslatable: field.translate,
//         dynamicPlaceholder: attrs.options.dynamic_placeholder,
//         autocomplete: attrs.autocomplete,
//         isPassword: archParseBoolean(attrs.password),
//         placeholder: attrs.placeholder,
//     };
// };

registry.category("fields").add("mj_char", MjCharField);
