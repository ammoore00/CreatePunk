onEvent('recipes', event => {

    //------ Item Crushing ------//

    event.recipes.createCrushing(
        'kubejs:crushed_coal',
        'minecraft:coal'
    );
    event.recipes.createCrushing(
        '9x kubejs:crushed_coal',
        'minecraft:coal_block'
    )
    
    event.recipes.createCrushing(
        [
            Item.of('kubejs:crushed_coal').withChance(0.78),
            Item.of('supplementaries:ash').withChance(0.22)
        ],
        'minecraft:charcoal'
    );
    event.recipes.createCrushing(
        [
            '7x kubejs:crushed_coal',
            '2x supplementaries:ash'
        ],
        'quark:charcoal_block'
    );

    //------ Ore Crushing ------//

    // Vanilla Ores

    event.remove({id: 'create:crushing/coal_ore'});
    event.remove({id: 'create:crushing/deepslate_coal_ore'});

    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'minecraft:coal_ore'
    );
    event.recipes.createCrushing(
        [
            '2x kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobbled_deepslate').withChance(0.125)
        ],
        'minecraft:deepslate_coal_ore'
    );

    // Vanilla Stone Type Ores
    
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'excavated_variants:andesite_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:orange_sand').withChance(0.125)
        ],
        'excavated_variants:granite_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:diorite_coal_ore'
    );
    event.recipes.createCrushing(
        [
            '2x kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:flint').withChance(0.125)
        ],
        'excavated_variants:tuff_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:calcite_coal_ore'
    );
    event.recipes.createCrushing(
        [
            '2x kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:smooth_basalt_coal_ore'
    );

    // Other Stone Types

    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:quark_jasper_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gravel').withChance(0.125)
        ],
        'excavated_variants:quark_shale_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_schist_coal_ore'
    );
    event.recipes.createCrushing(
        [
            '2x kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_rhylolite_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:create_limestone_coal_ore'
    );

    // Create Colored Stones

    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:copper_nugget').withChance(0.125)
        ],
        'excavated_variants:create_veridium_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:iron_nugget').withChance(0.125)
        ],
        'excavated_variants:create_crimsite_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:zinc_nugget').withChance(0.125)
        ],
        'excavated_variants:create_asurine_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gold_nugget').withChance(0.125)
        ],
        'excavated_variants:create_ochrum_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_coal_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_coal_ore'
    );
});