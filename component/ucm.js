import Velocity from './velocity';

export const V_UCM = 'Uniform Circular Motion';

export default class UCM extends Velocity {
    constructor(cx, cy, omega, r) {
        super(V_UCM);
        this.cx = cx;
        this.cy = cy;
        this.omega = omega;
        this.r = r;
    }
}
