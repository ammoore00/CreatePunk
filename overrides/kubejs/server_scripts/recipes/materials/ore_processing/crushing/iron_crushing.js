onEvent('recipes', event => {

    //------ Item Crushing ------//

    //------ Ore Crushing ------//

    // Vanilla Stone Type Ores
    
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'excavated_variants:andesite_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:orange_sand').withChance(0.125)
        ],
        'excavated_variants:granite_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:diorite_iron_ore'
    );
    event.recipes.createCrushing(
        [
            '2x create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:flint').withChance(0.125)
        ],
        'excavated_variants:tuff_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:calcite_iron_ore'
    );
    event.recipes.createCrushing(
        [
            '2x create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:smooth_basalt_iron_ore'
    );

    // Other Stone Types

    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:quark_jasper_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gravel').withChance(0.125)
        ],
        'excavated_variants:quark_shale_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_schist_iron_ore'
    );
    event.recipes.createCrushing(
        [
            '2x create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_rhyolite_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:create_limestone_iron_ore'
    );

    // Create Colored Stones

    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:copper_nugget').withChance(0.125)
        ],
        'excavated_variants:create_veridium_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:iron_nugget').withChance(0.125)
        ],
        'excavated_variants:create_crimsite_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:zinc_nugget').withChance(0.125)
        ],
        'excavated_variants:create_asurine_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gold_nugget').withChance(0.125)
        ],
        'excavated_variants:create_ochrum_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_iron_ore'
    );
    event.recipes.createCrushing(
        [
            'create:crushed_iron_ore',
            Item.of('create:crushed_iron_ore').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_iron_ore'
    );
});