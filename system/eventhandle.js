import Events, { ATTATCH_TO_CIRCLE, DETATCH_FROM_CIRCLE } from './events';
import URM from '../component/urm';
import UCM from '../component/ucm';

const handleAttach = (s, o) => {
    console.log('here');
    s.velocity = new UCM(o.position.x, o.position.y, 1, o.range.r);
};

export const handle = (entities) => {
    while (Events.hasEvents()) {
        const event = Events.consume();
        if (event.type == ATTATCH_TO_CIRCLE) {
            handleAttach(event.subject, event.object);
        }
    }
}
