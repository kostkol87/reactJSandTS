///<reference path="../typings/react/react-global.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        _super.apply(this, arguments);
    }
    HelloWorld.prototype.render = function () {
        return <div>Hello World!!! =)</div>;
    };
    return HelloWorld;
}(React.Component));
ReactDOM.render(<HelloWorld />, document.getElementById('app'));
//# sourceMappingURL=HelloWorld.js.map