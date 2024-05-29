var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { underflow } from "./queue.js";
let myCar = (() => {
    let _classDecorators = [changeDoorStatus(false), changeAmountOfFuel(95)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _set_weight_decorators;
    let _get_weight_decorators;
    let _freeSeats_decorators;
    let _freeSeats_initializers = [];
    let _freeSeats_extraInitializers = [];
    let _isOpen_decorators;
    var myCar = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _set_weight_decorators = [logOnSet];
            _get_weight_decorators = [logOnGet];
            _freeSeats_decorators = [checkNumberOfSeats(4)];
            _isOpen_decorators = [checkAmountOfFuel];
            __esDecorate(this, null, _set_weight_decorators, { kind: "setter", name: "weight", static: false, private: false, access: { has: obj => "weight" in obj, set: (obj, value) => { obj.weight = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _get_weight_decorators, { kind: "getter", name: "weight", static: false, private: false, access: { has: obj => "weight" in obj, get: obj => obj.weight }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _isOpen_decorators, { kind: "method", name: "isOpen", static: false, private: false, access: { has: obj => "isOpen" in obj, get: obj => obj.isOpen }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _freeSeats_decorators, { kind: "field", name: "freeSeats", static: false, private: false, access: { has: obj => "freeSeats" in obj, get: obj => obj.freeSeats, set: (obj, value) => { obj.freeSeats = value; } }, metadata: _metadata }, _freeSeats_initializers, _freeSeats_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            myCar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        fuel = (__runInitializers(this, _instanceExtraInitializers), "50%");
        open = true;
        errors;
        _weight = 1000;
        set weight(num) {
            this._weight = this._weight + num;
        }
        get weight() {
            return this._weight;
        }
        freeSeats = __runInitializers(this, _freeSeats_initializers, 3);
        isOpen(value) {
            return this.open ? underflow : `close ${value}`;
        }
        constructor() {
            __runInitializers(this, _freeSeats_extraInitializers);
        }
    };
    return myCar = _classThis;
})();
function logOnSet(target, context) {
    return function (...args) {
        console.log(`Изменяем значение на ${[...args]}`);
        return target.apply(this, args);
    };
}
function logOnGet(target, context) {
    return function () {
        console.log(`Test`);
        return target.apply(this);
    };
}
function checkNumberOfSeats(limit) {
    return function (target, context) {
        return function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                return newAmount;
            }
            else {
                throw Error(`Больше ${limit} сидений быть не может, меньше 1 тоже`);
            }
        };
    };
}
function checkAmountOfFuel(target, context) {
    return function (...args) {
        // console.log(this.fuel);
        console.log(`${String(context.name)} был запущен`);
        return target.apply(this, args);
    };
}
function changeDoorStatus(status) {
    console.log("door init");
    return (target, context) => {
        console.log("door changed");
        return class extends target {
            open = status;
        };
    };
}
function changeAmountOfFuel(amount) {
    console.log("fuel init");
    return (target, context) => {
        console.log("fuel changed");
        return class extends target {
            fuel = `${amount}%`;
        };
    };
}
const car = new myCar();
car.weight = 3;
console.log(car.weight);
