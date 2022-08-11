onEvent('recipes', event => {

    //------ Item Crushing ------//

    //------ Ore Crushing ------//

    // Vanilla Stone Type Ores
    
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'excavated_variants:andesite_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:orange_sand').withChance(0.125)
        ],
        'excavated_variants:granite_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:diorite_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            '2x minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:flint').withChance(0.125)
        ],
        'excavated_variants:tuff_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:calcite_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            '2x minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:smooth_basalt_emerald_ore'
    );

    // Other Stone Types

    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:quark_jasper_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:gravel').withChance(0.125)
        ],
        'excavated_variants:quark_shale_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_schist_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            '2x minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:red_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_rhylolite_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:white_sand').withChance(0.125)
        ],
        'excavated_variants:create_limestone_emerald_ore'
    );

    // Create Colored Stones

    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:copper_nugget').withChance(0.125)
        ],
        'excavated_variants:create_veridium_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:iron_nugget').withChance(0.125)
        ],
        'excavated_variants:create_crimsite_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('create:zinc_nugget').withChance(0.125)
        ],
        'excavated_variants:create_asurine_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:emerald_nugget').withChance(0.125)
        ],
        'excavated_variants:create_ochrum_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_emerald_ore'
    );
    event.recipes.createCrushing(
        [
            'minecraft:emerald',
            Item.of('minecraft:emerald').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_emerald_ore'
    );
});