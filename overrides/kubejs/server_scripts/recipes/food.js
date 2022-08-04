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

    event.remove({id: 'corn_delight:cooking/boiled_corn'});
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            Item.of('corn_delight:corn').toResultJson()
        ],
        result: Item.of('kubejs:boiled_corn').toResultJson(),
        experience: 0.2,
        cookingtime: 200
    })
    .id('corn_delight:cooking/boiled_corn');

    event.remove({id: 'corn_delight:cooking/cornbread_stuffing'});
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            Item.of('corn_delight:cornbread').toResultJson(),
            Item.of('#forge:vegetables').toResultJson(),
            Item.of('minecraft:baked_potato').toResultJson(),
            Item.of('minecraft:sweet_berries').toResultJson()
        ],
        result: Item.of('kubejs:cornbread_stuffing').toResultJson(),
        experience: 0.2,
        cookingtime: 200
    })
    .id('corn_delight:cooking/cornbread_stuffing');

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
    })
    .id('createpunk:food/mushroom_stew');

    event.remove({output: 'minecraft:beetroot_soup'});
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            Item.of('minecraft:beetroot').toResultJson(),
            Item.of('minecraft:beetroot').toResultJson(),
            Item.of('minecraft:carrot').toResultJson(),
            Item.of('#forge:vegetables').toResultJson()
        ],
        result: Item.of('minecraft:mushroom_stew').toResultJson(),
        container: Item.of('minecraft:bowl').toResultJson(),
        experience: 0.2,
        cookingtime: 200
    })
    .id('createpunk:food/beetroot_soup');

    event.remove({output: 'farmersdelight:fruit_salad'});
    event.shapeless(
        'farmersdelight:fruit_salad',
        [
            '#forge:apples',
            'minecraft:melon_slice',
            'minecraft:sweet_berries',
            'farmersdelight:pumpkin_slice',
            '#forge:fruits'
        ]
    )
    .id('createpunk:food/fruit_salad');

    event.remove({output: 'buzzier_bees:honeyed_apple'});
    
    event.remove({output: 'buzzier_bees:honey_bread'});
    event.recipes.createFilling(
        'buzzier_bees:honey_bread',
        [
            'minecraft:bread',
            Fluid.of('create:honey', 250)
        ]
    )
    .id('createpunk:honey_bread');

    event.remove({output: 'buzzier_bees:glazed_porkchop'});
    event.recipes.createFilling(
        'buzzier_bees:glazed_porkchop',
        [
            'minecraft:cooked_porkchop',
            Fluid.of('create:honey', 250)
        ]
    )
    .id('createpunk:glazed_porkchop');
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