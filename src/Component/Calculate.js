import Operate from './Operate';
import IsNumber from './IsNumber';
export default function calculate(obj, btnTitle) {
    if (btnTitle === 'C') {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (IsNumber(btnTitle)) {
        if (btnTitle === '0' && obj.next === '0') {
            return {};
        }
        if (obj.operation) {
            if (obj.next) {
                return { next: obj.next + btnTitle };
            }
            return { next: btnTitle };
        }
        if (obj.next) {
            return {
                next: obj.next + btnTitle,
                total: null,
            };
        }
        return {
            next: btnTitle,
            total: null,
        };
    }


    if (btnTitle === '=') {
        if (obj.next && obj.operation) {
            return {
                total: Operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        } else {
            return {};
        }
    }

    if (btnTitle === '+/-') {
        if (obj.next) {
            return { next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
            return { total: (-1 * parseFloat(obj.total)).toString() };
        }
        return {};
    }

    if (obj.operation) {
        return {
            total: Operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: btnTitle,
        };
    }

    if (!obj.next) {
        return { operation: btnTitle };
    }

    return {
        total: obj.next,
        next: null,
        operation: btnTitle,
    };
}