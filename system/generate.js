import Position from '../component/position';
import Circle from '../component/circle';
import Range from '../component/range';
const DEFAULT_LIFE = 5;

export const generate = (width, height, entities) => {
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].isDead) {
            const cx = Math.random() * width;
            const cy = Math.random() * height;
            const r = Math.random() * 100 + 10;
            if (cx - r <= 0 || cx + r >= width || cy - r <= 0 || cy + r >= height) {
                continue;
            }
            if (entities.find(e => {
                if (e.isDead) {
                    return false;
                }
                const { position, range } = e;
                if (position && range) {
                    return Math.hypot(cx - position.x, cy - position.y) <= r + range.r + 2;
                }
                return false;
            })) {
                continue;
            }
            entities[i].isDead = false;
            entities[i].position = new Position(cx, cy);
            entities[i].life = 1 + Math.random() * 2;
            entities[i].shape = new Circle(r, 'rgba(0, 0, 255, 0.5)');
            entities[i].range = new Range(r);
        }
    }
}
