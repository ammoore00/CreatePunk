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