"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
let ShippingContainer = class ShippingContainer {
    // lastCalculation: string;
    // createdAt: Date;
    constructor(width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
        validate(this, "width", width);
        validate(this, "length", length);
        validate(this, "height", height);
    }
    calcArea(multiply) {
        return this.width * this.length * (multiply ? multiply : 1);
    }
    calcVolume(multiply) {
        return this.width * this.length * this.height * (multiply ? multiply : 1);
    }
};
__decorate([
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], ShippingContainer.prototype, "width", void 0);
__decorate([
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], ShippingContainer.prototype, "length", void 0);
__decorate([
    IsInt(),
    Min(1),
    Max(8),
    __metadata("design:type", Number)
], ShippingContainer.prototype, "height", void 0);
__decorate([
    fixLastCalculation("calcArea"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], ShippingContainer.prototype, "calcArea", null);
__decorate([
    fixLastCalculation("calcVolume"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShippingContainer.prototype, "calcVolume", null);
ShippingContainer = __decorate([
    createdAt,
    __metadata("design:paramtypes", [Number, Number, Number])
], ShippingContainer);
const container = new ShippingContainer(10, 100, 7);
container.width = 5;
container.height = 5;
console.log(container.createdAt);
console.log(container.calcVolume());
console.log(container.calcArea());
console.log(container.lastCalculation);
finalValidate(container);
// 3-я задача
function fixLastCalculation(method) {
    return (target, propertyKey, descriptor) => {
        const oldValue = descriptor.value;
        descriptor.value = function (...args) {
            this.lastCalculation = `Последний подсчет ${method} был ${new Date()}`;
            return oldValue.apply(this, args);
        };
    };
}
// 1-задача
function createdAt(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.createdAt = new Date();
        }
    };
}
function IsInt() {
    return function (target, propertyKey) {
        Reflect.defineMetadata("IsInt", true, target, propertyKey);
    };
}
function Min(value) {
    return function (target, propertyKey) {
        Reflect.defineMetadata("Min", value, target, propertyKey);
    };
}
function Max(value) {
    return function (target, propertyKey) {
        Reflect.defineMetadata("Max", value, target, propertyKey);
    };
}
function finalValidate(obj) {
    if (obj && typeof obj === "object" && !Array.isArray(obj)) {
        for (let key in obj) {
            validate(obj, key, obj[key]);
        }
    }
}
function validate(target, propertyKey, value) {
    if (Reflect.getMetadata("IsInt", target, propertyKey) &&
        (!Number.isInteger(value) || value !== parseInt(value))) {
        throw new Error(`property ${propertyKey} should be an integer`);
    }
    if (Reflect.hasMetadata("Min", target, propertyKey) &&
        value < Reflect.getMetadata("Min", target, propertyKey)) {
        throw new Error(`min value for ${propertyKey} is ${Reflect.getMetadata("Min", target, propertyKey)}`);
    }
    if (Reflect.hasMetadata("Max", target, propertyKey) &&
        value > Reflect.getMetadata("Max", target, propertyKey)) {
        throw new Error(`max value for ${propertyKey} is ${Reflect.getMetadata("Max", target, propertyKey)}`);
    }
}
