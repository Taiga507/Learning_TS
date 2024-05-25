"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const limitMetadataKey = Symbol("limit");
let myCar = class myCar {
    constructor() {
        this.fuel = "50%";
        this.open = true;
    }
    isOpen(value) {
        return this.open ? "open" : `close ${value}`;
    }
    startTravel(passengers) {
        console.log(`Started with ${passengers} passengers`);
    }
};
__decorate([
    checkNumberOfSeats(4)
], myCar.prototype, "freeSeats", void 0);
__decorate([
    checkAmountOfFuel
], myCar.prototype, "isOpen", null);
__decorate([
    validate,
    __param(0, limit)
], myCar.prototype, "startTravel", null);
myCar = __decorate([
    changeDoorStatus(false),
    changeAmountOfFuel(95)
], myCar);
function limit(target, propertyKey, parameterIndex) {
    let limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
    limitedParametrs.push(parameterIndex);
    Reflect.defineMetadata(limitMetadataKey, limitedParametrs, target, propertyKey);
}
function validate(target, propertyKey, descriptor) {
    let method = descriptor.value;
    descriptor.value = function (...args) {
        let limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey);
        if (limitedParametrs) {
            for (let index of limitedParametrs) {
                if (args[index] > 4) {
                    throw new Error("Нельзя больше 4х пассажиров");
                }
            }
        }
        return method === null || method === void 0 ? void 0 : method.apply(this, args);
    };
}
function checkNumberOfSeats(limit) {
    return function (target, propertyKey) {
        let symbol = Symbol();
        const getter = function () {
            return this[symbol];
        };
        const setter = function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                this[symbol] = newAmount + 1;
            }
            else {
                // console.log(`Больше ${limit} сидений быть не может`);
                Object.defineProperty(target, "errors", {
                    value: `Больше ${limit} сидений быть не может`,
                });
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
function checkAmountOfFuel(target, propertyKey, descriptor) {
    const oldValue = descriptor.value;
    descriptor.value = function (...args) {
        console.log(this.fuel);
        return oldValue.apply(this, args);
    };
}
function changeDoorStatus(status) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
function changeAmountOfFuel(amount) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.fuel = `${amount}%`;
            }
        };
    };
}
const car = new myCar();
car.startTravel(3);
// console.log(car);
// f(x(y()));
