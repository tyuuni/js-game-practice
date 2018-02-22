
let queue = [];

export const DIE = 'DIE';
export const ATTATCH_TO_CIRCLE = 'ATTATCH_TO_CIRCLE';
export const DETATCH_FROM_CIRCLE = 'DETATCH_FROM_CIRCLE';
export const ADD_SCORE = 'ADD_SCORE';

export default class Events {
    static hasEvents() {
        return queue.length !== 0;
    }

    static emit(e) {
        queue.push(e);
    }

    static consume() {
        return queue.shift();
    }
}
