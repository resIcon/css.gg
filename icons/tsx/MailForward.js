"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMailForward = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;box-sizing:border-box;height:6px;border-top:2px solid}&{border-left:2px solid;transform:scale(var(--ggs,1));border-top-left-radius:4px;position:relative;width:14px}&::before{content:\"\";position:absolute;width:6px;border-right:2px solid;top:-4px;right:-1px;transform:rotate(45deg)}\n"], ["\n  &,&::before{display:block;box-sizing:border-box;height:6px;border-top:2px solid}&{border-left:2px solid;transform:scale(var(--ggs,1));border-top-left-radius:4px;position:relative;width:14px}&::before{content:\"\";position:absolute;width:6px;border-right:2px solid;top:-4px;right:-1px;transform:rotate(45deg)}\n"])));
exports.MailForward = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMailForward, tslib_1.__assign({}, props, { ref: ref, "icon-role": "mail-forward" }))));
});
var templateObject_1;
//# sourceMappingURL=MailForward.js.map