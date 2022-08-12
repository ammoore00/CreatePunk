onEvent('recipes', event => {

    //------ Item Crushing ------//

    //------ Ore Crushing ------//

    // Vanilla Stone Type Ores
    
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'excavated_variants:andesite_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:orange_sand').withChance(0.125)
        ],
        'excavated_variants:granite_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:diorite_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '12x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:flint').withChance(0.125)
        ],
        'excavated_variants:tuff_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:calcite_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '12x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:smooth_basalt_lapis_ore'
    );

    // Other Stone Types

    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:quark_jasper_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gravel').withChance(0.125)
        ],
        'excavated_variants:quark_shale_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_schist_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '12x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_rhyolite_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:create_limestone_lapis_ore'
    );

    // Create Colored Stones

    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:copper_nugget').withChance(0.125)
        ],
        'excavated_variants:create_veridium_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:iron_nugget').withChance(0.125)
        ],
        'excavated_variants:create_crimsite_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:zinc_nugget').withChance(0.125)
        ],
        'excavated_variants:create_asurine_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gold_nugget').withChance(0.125)
        ],
        'excavated_variants:create_ochrum_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_lapis_ore'
    );
    event.recipes.createCrushing(
        [
            '10x minecraft:lapis_lazuli',
            Item.of('10x minecraft:lapis_lazuli').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_lapis_ore'
    );
});