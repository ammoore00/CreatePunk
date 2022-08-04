onEvent('recipes', event => {
    event.remove({output: 'farmersdelight:wheat_dough'});
    event.replaceInput('create:dough', 'farmersdelight:wheat_dough');
    event.replaceOutput('create:dough', 'farmersdelight:wheat_dough');
    event.shapeless(
        'farmersdelight:wheat_dough',
        [
            'create:dough'
        ]
    );

    event.replaceOutput('corn_delight:grilled_corn', 'kubejs:grilled_corn');
    event.replaceOutput('corn_delight:boiled_corn', 'kubejs:boiled_corn');
    event.replaceOutput('corn_delight:cornbread_stuffing', 'kubejs:cornbread_stuffing');

    event.remove({output: 'minecraft:mushroom_stew'});
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            Item.of('minecraft:brown_mushroom').toResultJson(),
            Item.of('minecraft:brown_mushroom').toResultJson(),
            Item.of('farmersdelight:onion').toResultJson(),
            Item.of('#forge:milk').toResultJson()
        ],
        result: Item.of('minecraft:mushroom_stew').toResultJson(),
        container: Item.of('minecraft:bowl').toResultJson(),
        experience: 0.2,
        cookingtime: 200
    });

    event.remove({output: 'minecraft:beetroot_soup'});
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            Item.of('minecraft:beetroot').toResultJson(),
            Item.of('minecraft:beetroot').toResultJson(),
            Item.of('#forge:vegetables').toResultJson()
        ],
        result: Item.of('minecraft:mushroom_stew').toResultJson(),
        container: Item.of('minecraft:bowl').toResultJson(),
        experience: 0.2,
        cookingtime: 200
    });
});

onEvent('tags.items', event => {
    event.add('diet:fruits', ['farmersrespite:coffee_berries', 'ecologics:coconut_slice', 'ecologics:prickly_pear', 'ecologics:cooked_prickly_pear']);
    event.add('diet:grains', ['corn_delight:corn', 'corn_delight:corn_seeds']);
    event.add('diet:proteins', [
        'goodall:raw_venison', 'goodall:cooked_venison',
        'biomemakeover:glowshroom_stew', 'biomemakeover:raw_toad', 'biomemakeover:cooked_toad',
        'ecologics:crab_meat', 'ecologics:walnut',
        'nethersdelight:hoglin_loin', 'nethersdelight:hoglin_sirloin', 'nethersdelight:strider_slice', 'nethersdelight:ground_strider', 'nethersdelight:hoglin_ear'
    ]);
    event.add('diet:vegetables', ['biomemakeover:bulbus_root', 'biomemakeover:roasted_bulbus_root']);
    event.add('diet:sugars', ['nethersdelight:propelpearl']);

    event.add('forge:fruits', ['ecologics:coconut_slice', 'ecologics:cooked_prickly_pear']);
});