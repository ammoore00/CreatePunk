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