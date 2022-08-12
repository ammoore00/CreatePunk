onEvent('recipes', event => {

    //------ Item Crushing ------//

    //------ Ore Crushing ------//

    // Vanilla Stone Type Ores
    
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'excavated_variants:andesite_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:orange_sand').withChance(0.125)
        ],
        'excavated_variants:granite_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:diorite_gold_ore'
    );
    event.recipes.createCrushing(
        [
            '2x create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:flint').withChance(0.125)
        ],
        'excavated_variants:tuff_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:calcite_gold_ore'
    );
    event.recipes.createCrushing(
        [
            '2x create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:smooth_basalt_gold_ore'
    );

    // Other Stone Types

    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:quark_jasper_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gravel').withChance(0.125)
        ],
        'excavated_variants:quark_shale_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_schist_gold_ore'
    );
    event.recipes.createCrushing(
        [
            '2x create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_rhyolite_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:create_limestone_gold_ore'
    );

    // Create Colored Stones

    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:copper_nugget').withChance(0.125)
        ],
        'excavated_variants:create_veridium_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:iron_nugget').withChance(0.125)
        ],
        'excavated_variants:create_crimsite_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:zinc_nugget').withChance(0.125)
        ],
        'excavated_variants:create_asurine_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gold_nugget').withChance(0.125)
        ],
        'excavated_variants:create_ochrum_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_gold_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_gold_ore',
            Item.of('create:crushed_gold_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_gold_ore'
    );
});