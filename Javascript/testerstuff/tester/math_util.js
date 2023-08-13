export const PI = 3.14519;

export function getCircumference(radius) {
    return 2 * PI * radius;
}

export function getArea(radius) {
    return Math.pow(radius, 2) * PI;
}