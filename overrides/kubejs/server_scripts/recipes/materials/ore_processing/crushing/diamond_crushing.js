onEvent('recipes', event => {

    //------ Item Crushing ------//

    event.recipes.createCrushing(
        'createaddition:diamond_grit',
        'kubejs:raw_diamond'
    );
    event.recipes.createCrushing(
        'createaddition:diamond_grit',
        'minecraft:diamond'
    );

    //------ Ore Crushing ------//

    // Vanilla Ores

    event.remove({id: 'create:crushing/diamond_ore'});
    event.remove({id: 'create:crushing/deepslate_diamond_ore'});

    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'minecraft:diamond_ore'
    );
    event.recipes.createCrushing(
        [
            '2x kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobbled_deepslate').withChance(0.125)
        ],
        'minecraft:deepslate_diamond_ore'
    );

    // Vanilla Stone Type Ores
    
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'excavated_variants:andesite_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:orange_sand').withChance(0.125)
        ],
        'excavated_variants:granite_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:diorite_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            '2x kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:flint').withChance(0.125)
        ],
        'excavated_variants:tuff_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:calcite_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            '2x kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:smooth_basalt_diamond_ore'
    );

    // Other Stone Types

    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:quark_jasper_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gravel').withChance(0.125)
        ],
        'excavated_variants:quark_shale_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_schist_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            '2x kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_rhylolite_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:create_limestone_diamond_ore'
    );

    // Create Colored Stones

    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:copper_nugget').withChance(0.125)
        ],
        'excavated_variants:create_veridium_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:iron_nugget').withChance(0.125)
        ],
        'excavated_variants:create_crimsite_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:zinc_nugget').withChance(0.125)
        ],
        'excavated_variants:create_asurine_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:diamond_nugget').withChance(0.125)
        ],
        'excavated_variants:create_ochrum_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_diamond_ore'
    );
    event.recipes.createCrushing(
        [
            'kubejs:raw_diamond',
            Item.of('kubejs:raw_diamond').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_diamond_ore'
    );
});