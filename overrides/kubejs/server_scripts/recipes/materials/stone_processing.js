onEvent('recipes', event => {

    //------ General ------//

    event.remove({id: 'create:crushing/tuff'});

    event.recipes.createCrushing(
        [
            Item.of('minecraft:flint').withChance(0.25)
        ],
        'minecraft:tuff'
    );

    event.recipes.createMilling(
        [
            'minecraft:gravel'
        ],
        'quark:shale'
    );

    //------ Sand Milling ------//

    event.remove({id: 'create:milling/calcite'});
    event.remove({id: 'create:milling/diorite'});
    event.remove({id: 'create:crushing/diorite_recycling'});
    event.remove({id: 'create:milling/granite'});

    // Sand

    event.recipes.createMilling(
        [
            'minecraft:sand'
        ],
        'minecraft:gravel'
    );

    // Red Sand

    event.recipes.createMilling(
        [
            'minecraft:red_sand'
        ],
        'twigs:rhyolite'
    );
    event.recipes.createMilling(
        [
            'minecraft:red_sand'
        ],
        'quark:jasper'
    );

    // Orange Sand

    event.recipes.createMilling(
        [
            'biomesoplenty:orange_sand'
        ],
        'minecraft:granite'
    );

    // White Sand

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
            'biomesoplenty:white_sand'
        ],
        'create:limestone'
    );
    event.recipes.createMilling(
        [
            'biomesoplenty:white_sand'
        ],
        'twigs:schist'
    );

    // Black Sand

    event.recipes.createMilling(
        [
            'biomesoplenty:black_sand'
        ],
        'minecraft:blackstone'
    );
    event.recipes.createMilling(
        [
            'biomesoplenty:black_sand'
        ],
        'minecraft:basalt'
    );
    event.recipes.createMilling(
        [
            'biomesoplenty:black_sand'
        ],
        'minecraft:smooth_basalt'
    );
    event.recipes.createMilling(
        [
            'biomesoplenty:black_sand'
        ],
        'create:scorchia'
    );
    event.recipes.createMilling(
        [
            'biomesoplenty:black_sand'
        ],
        'create:scoria'
    );

    // Soul Sand

    event.recipes.createMilling(
        [
            'minecraft:soul_sand'
        ],
        'twigs:bloodstone'
    );

    //------ Sand Washing ------//

    event.recipes.createSplashing(
        [
            Item.of('create:zinc_nugget').withChance(.125),
            Item.of('ecologics:seashell').withChance(.001)
        ],
        'biomesoplenty:white_sand'
    );

    event.recipes.createSplashing(
        [
            Item.of('create:copper_nugget').withChance(.125)
        ],
        'biomesoplenty:orange_sand'
    );
});