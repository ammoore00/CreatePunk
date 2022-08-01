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
    event.add('diet:grains', ['corndelight:corn', 'corndelight:corn_seeds']);
    event.add('diet:proteins', ['goodall:raw_venison', 'goodall:cooked_venison', 'biomemakeover:glowshrrom_stew', 'biomemakeover:raw_toad', 'biomemakeover:cooked_toad', 'ecologics:crab_meat', 'ecologics:walnut']);
    event.add('diet:vegetables', ['biomemakemover:bulbus_root', 'biomemakeover:roasted_bulbus_root']);
});