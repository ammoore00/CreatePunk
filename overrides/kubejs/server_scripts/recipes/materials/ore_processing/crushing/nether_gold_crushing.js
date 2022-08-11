onEvent('recipes', event => {

    //------ Item Crushing ------//

    //------ Ore Crushing ------//
    
    // Vanilla Nether Stone Types

    event.recipes.createCrushing(
        [
            '18x minecraft:gold_nugget',
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:basalt_nether_gold_ore'
    );
    event.recipes.createCrushing(
        [
            '18x minecraft:gold_nugget',
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:smooth_basalt_nether_gold_ore'
    );
    event.recipes.createCrushing(
        [
            '18x minecraft:gold_nugget',
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:black_stone_nether_gold_ore'
    );
    
    // Other Nether Stone Types

    event.recipes.createCrushing(
        [
            '18x minecraft:gold_nugget',
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:soul_sand').withChance(0.125)
        ],
        'excavated_variants:twigs_bloodstone_nether_gold_ore'
    );
    event.recipes.createCrushing(
        [
            '18x minecraft:gold_nugget',
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scoria_nether_gold_ore'
    );
    event.recipes.createCrushing(
        [
            '18x minecraft:gold_nugget',
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('biomesoplenty:black_sand').withChance(0.125)
        ],
        'excavated_variants:create_scorchia_nether_gold_ore'
    );
});