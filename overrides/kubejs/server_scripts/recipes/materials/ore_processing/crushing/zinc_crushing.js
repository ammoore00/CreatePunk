onEvent('recipes', event => {

    //------ Item Crushing ------//

    //------ Ore Crushing ------//

    // Vanilla Stone Type Ores
    
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'excavated_variants:andesite_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:orange_sand').withChance(0.125)
        ],
        'excavated_variants:granite_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:diorite_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            '2x create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:flint').withChance(0.125)
        ],
        'excavated_variants:tuff_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:calcite_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            '2x create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:smooth_basalt_zinc_ore'
    );

    // Other Stone Types

    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:quark_jasper_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gravel').withChance(0.125)
        ],
        'excavated_variants:quark_shale_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_schist_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            '2x create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_rhyolite_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:create_limestone_zinc_ore'
    );

    // Create Colored Stones

    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:copper_nugget').withChance(0.125)
        ],
        'excavated_variants:create_veridium_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:iron_nugget').withChance(0.125)
        ],
        'excavated_variants:create_crimsite_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:zinc_nugget').withChance(0.125)
        ],
        'excavated_variants:create_asurine_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gold_nugget').withChance(0.125)
        ],
        'excavated_variants:create_ochrum_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_zinc_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_zinc_ore',
            Item.of('create:crushed_zinc_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_zinc_ore'
    );
});