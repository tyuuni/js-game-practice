import { range } from 'lodash';
import Position from './component/position';
import Range from './component/range';
import Circle from './component/circle';
import URM from './component/urm';

import { drawWorld } from './system/draw';
import { generate } from './system/generate';
import { decreaseLife } from './system/decreaselife';
import { move } from './system/move';
import Events, { ATTATCH_TO_CIRCLE } from './system/events';
import { handle } from './system/eventhandle';

const canvas = document.getElementById("myCanvas");
const { width, height } = canvas;
const ctx = canvas.getContext("2d");

console.log(width, height);

class Game {
    constructor() {
        this.entities = range(10).map(() => {
            return {
                isDead: true
            };
        });
    }

    start() {
        this.entities[0] = {
            position: new Position(50, 50),
            range: new Range(2),
            shape: new Circle(2, 'rgba(0, 0, 0)'),
            velocity: new URM(50, 50)
        }
        this.run.bind(this);
        setInterval(() => this.run(), 20);
    }

    run() {
        // decreaseLife(this.entities, 20 / 1000);
        generate(width, height, this.entities);
        move(this.entities, 20 / 1000);
        handle(this.entities);
        drawWorld(width, height, ctx, this.entities, 30);
    }
}

new Game().start();
