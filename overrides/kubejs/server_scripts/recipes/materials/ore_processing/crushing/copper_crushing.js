onEvent('recipes', event => {

    //------ Item Crushing ------//

    //------ Ore Crushing ------//

    // Vanilla Stone Type Ores
    
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'excavated_variants:andesite_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:orange_sand').withChance(0.125)
        ],
        'excavated_variants:granite_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:diorite_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '7x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:flint').withChance(0.125)
        ],
        'excavated_variants:tuff_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:calcite_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '7x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:smooth_basalt_copper_ore'
    );

    // Other Stone Types

    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:quark_jasper_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gravel').withChance(0.125)
        ],
        'excavated_variants:quark_shale_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_schist_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '7x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_rhylolite_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:create_limestone_copper_ore'
    );

    // Create Colored Stones

    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:copper_nugget').withChance(0.125)
        ],
        'excavated_variants:create_veridium_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:iron_nugget').withChance(0.125)
        ],
        'excavated_variants:create_crimsite_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:zinc_nugget').withChance(0.125)
        ],
        'excavated_variants:create_asurine_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gold_nugget').withChance(0.125)
        ],
        'excavated_variants:create_ochrum_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_copper_ore'
    );
    event.recipes.createCrushing(
        [
            '5x create:crushed_copper',
            Item.of('create:crushed_copper').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_copper_ore'
    );
});