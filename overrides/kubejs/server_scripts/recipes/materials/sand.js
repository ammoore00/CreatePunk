onEvent('recipes', event => {

    //------ Sand Milling ------//

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

    //------ Sand Washing ------//

    event.recipes.createWashing(
        [
            Item.of('create:zinc_nugget').withChance(.125),
            Item.of('ecologics:seashell').withChance(.01)
        ],
        'biomesoplenty:white_sand'
    );

    event.recipes.createWashing(
        [
            Item.of('create:copper_nugget').withChance(.125)
        ],
        'biomesoplenty:orange_sand'
    );
});