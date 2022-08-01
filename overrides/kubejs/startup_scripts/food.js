onEvent('item.registry', event => {
    event.create('grilled_corn').food(food => {
        food.hunger(4);
        food.saturation(.48); // Saturation needs to be divided by 10... for some reason
    });
    event.create('boiled_corn').food(food => {
        food.hunger(4);
        food.saturation(.48);
    });
    event.create('cornbread_stuffing').food(food => {
        food.hunger(10);
        food.saturation(.6); // I don't even know what's happening
    });
});