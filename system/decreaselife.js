
export const decreaseLife = (entities, delta) => {
    entities.forEach(e => {
        if (e.life) {
            e.life = Math.max(0, e.life - delta);
            if (!e.life) {
                e.isDead = true;
            }
        }
    });
}
