import URM from '../component/urm';
import UCM from '../component/ucm';
import Position from '../component/position';

import Events, { ATTATCH_TO_CIRCLE } from './events';

const correctPositionInUCM = (x, y, ucm) => {
    const dx = x - ucm.cx;
    const dy = y - ucm.cy;
    const l = Math.hypot(dx, dy);
    const scala = ucm.r / l;
    return new Position(ucm.cx + dx * scala, ucm.cy + dy * scala);
};

const checkAttach = (e, entities) => {
    entities.forEach(f => {
        if (f !== e && f.position) {
            if (Math.hypot(e.position.x - f.position.x, e.position.y - f.position.y) <= f.range.r + 1) {
                Events.emit({
                    type: ATTATCH_TO_CIRCLE,
                    subject: e,
                    object: f
                });
            }
        }
    });
};


export const move = (entities, dt) => {
    entities.forEach(e => {
        if (e.velocity) {
            const { x, y } = e.position;
            if (e.velocity instanceof URM) {
                e.position.x = x + e.velocity.vx * dt;
                e.position.y = y + e.velocity.vy * dt;
                checkAttach(e, entities);
            } else if (e.velocity instanceof UCM) {
                const correctedPos = correctPositionInUCM(x, y, e.velocity);
                const rv_x = correctedPos.x - e.velocity.cx;
                const rv_y = correctedPos.y - e.velocity.cy;
                const dx = -rv_y * e.velocity.omega;
                const dy = rv_x * e.velocity.omega;
                e.position.x = correctedPos.x + dx * dt;
                e.position.y = correctedPos.y + dy * dt;
            }

        }
    });
}
