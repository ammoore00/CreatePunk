onEvent('recipes', event => {
    event.remove({id: 'create:milling/calcite'});
    event.remove({id: 'create:milling/diorite'});

    event.recipes.createMilling(
        [
            'minecraft:sand'
        ],
        'minecraft:gravel'
    );

    event.recipes.createMilling(
        [
            'biomesoplenty:white_sand'
        ],
        'minecraft:calcite'
    );
    event.recipes.createMilling(
        [
            'biomesoplenty:white_sand'
        ],
        'minecraft:diorite'
    );

    event.recipes.createMilling(
        [
            'biomesoplenty:black_sand'
        ],
        'minecraft:blackstone'
    );

    event.shapeless(
        '2x biomesoplenty:orange_sand',
        [
            'minecraft:sand',
            'minecraft:red_sand'
        ]
    );
});