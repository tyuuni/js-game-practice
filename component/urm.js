import Velocity from './velocity';

export const V_URM = 'Uniform Rectilinear Motion';

export default class URM extends Velocity {
    constructor(vx, vy) {
        super(V_URM);
        this.vx = vx;
        this.vy = vy;
    }
}
