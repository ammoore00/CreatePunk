onEvent('recipes', event => {

    //------ Item Crushing ------//

    //------ Ore Crushing ------//

    // Vanilla Stone Type Ores
    
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'excavated_variants:andesite_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:orange_sand').withChance(0.125)
        ],
        'excavated_variants:granite_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:diorite_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '7x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:flint').withChance(0.125)
        ],
        'excavated_variants:tuff_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:calcite_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '7x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:smooth_basalt_redstone_ore'
    );

    // Other Stone Types

    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:quark_jasper_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gravel').withChance(0.125)
        ],
        'excavated_variants:quark_shale_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_schist_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '7x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_rhylolite_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:create_limestone_redstone_ore'
    );

    // Create Colored Stones

    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:redstone_nugget').withChance(0.125)
        ],
        'excavated_variants:create_veridium_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:iron_nugget').withChance(0.125)
        ],
        'excavated_variants:create_crimsite_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:zinc_nugget').withChance(0.125)
        ],
        'excavated_variants:create_asurine_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gold_nugget').withChance(0.125)
        ],
        'excavated_variants:create_ochrum_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_redstone_ore'
    );
    event.recipes.createCrushing(
        [
            '6x minecraft:redstone',
            Item.of('6x minecraft:redstone').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_redstone_ore'
    );
});