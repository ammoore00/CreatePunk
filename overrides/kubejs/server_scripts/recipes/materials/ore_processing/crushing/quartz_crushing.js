onEvent('recipes', event => {

    //------ Item Crushing ------//

    //------ Ore Crushing ------//
    
    // Vanilla Nether Stone Types

    event.recipes.createCrushing(
        [
            '2x minecraft:quartz',
            Item.of('minecraft:quartz').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:basalt_quartz_ore'
    );
    event.recipes.createCrushing(
        [
            '2x minecraft:quartz',
            Item.of('minecraft:quartz').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_smooth_basalt_quartz_ore'
    );
    event.recipes.createCrushing(
        [
            '2x minecraft:quartz',
            Item.of('minecraft:quartz').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:blackstone_quartz_ore'
    );
    
    // Other Nether Stone Types

    event.recipes.createCrushing(
        [
            '2x minecraft:quartz',
            Item.of('minecraft:quartz').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:soul_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_bloodstone_quartz_ore'
    );
    event.recipes.createCrushing(
        [
            '2x minecraft:quartz',
            Item.of('minecraft:quartz').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_quartz_ore'
    );
    event.recipes.createCrushing(
        [
            '2x minecraft:quartz',
            Item.of('minecraft:quartz').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_quartz_ore'
    );
});