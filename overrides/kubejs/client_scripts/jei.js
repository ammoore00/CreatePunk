onEvent('jei.hide.items', event => {
    event.hide('minecraft:hopper');
    event.hide('littlelogistics:rapid_hopper');

    event.hide('corn_delight:grilled_corn');
    event.hide('corn_delight:boiled_corn');
    event.hide('corn_delight:cornbread_stuffing');

    event.hide('create:dough');

    event.hide('buzzier_bees:honeyed_apple');

    // Temporary, until beehive variants are properly added
    event.hide('compatoplenty:cherry_beehive');
    event.hide('compatoplenty:jacaranda_beehive');
    event.hide('compatoplenty:fir_beehive');
    event.hide('compatoplenty:redwood_beehive');
    event.hide('compatoplenty:mahogany_beehive');
    event.hide('compatoplenty:willow_beehive');
    event.hide('compatoplenty:magic_beehive');
    event.hide('compatoplenty:dead_beehive');
    event.hide('compatoplenty:umbran_beehive');
    event.hide('compatoplenty:palm_beehive');
    event.hide('compatoplenty:hellbark_beehive');
});