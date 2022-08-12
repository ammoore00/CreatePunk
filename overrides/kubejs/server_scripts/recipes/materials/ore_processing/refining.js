onEvent('recipes', event => {

    //------ Advanced Processing ------//

    event.remove({id: 'create:splashing/crushed_iron_ore'});
    event.remove({id: 'create:splashing/crushed_copper_ore'});
    event.remove({id: 'create:splashing/crushed_gold_ore'});
    event.remove({id: 'create:splashing/crushed_zinc_ore'});

    // Iron
    event.recipes.createSplashing(
        [
            '9x kubejs:refined_iron_ore',
            Item.of('3x kubejs:refined_iron_ore').withChance(0.5),
            Item.of('minecraft:redstone').withChance(0.75)
        ],
        'create:crushed_iron_ore'
    );

    // Copper
    event.recipes.createSplashing(
        [
            '9x kubejs:refined_copper_ore',
            Item.of('3x kubejs:refined_copper_ore').withChance(0.5),
            Item.of('minecraft:clay').withChance(0.5)
        ],
        'create:crushed_iron_ore'
    );

    // Gold
    event.recipes.createSplashing(
        [
            '9x kubejs:refined_gold_ore',
            Item.of('3x kubejs:refined_gold_ore').withChance(0.5),
            Item.of('minecraft:quartz').withChance(0.5)
        ],
        'create:crushed_iron_ore'
    );

    // Zinc
    event.recipes.createSplashing(
        [
            '9x kubejs:refined_zinc_ore',
            Item.of('3x kubejs:refined_zinc_ore').withChance(0.5),
            Item.of('minecraft:gunpowder').withChance(0.25)
        ],
        'create:crushed_iron_ore'
    );

    // Coal
    event.recipes.createSplashing(
        [
            '9x kubejs:refined_coal_dust',
            Item.of('3x kubejs:refined_coal_dust').withChance(0.5),
            Item.of('supplementaries:ash').withChance(0.25)
        ],
        'kubejs:crushed_coal'
    );

    event.recipes.createCompacting(
        'kubejs:coke',
        '9x kubejs:refined_coal_dust'
    ).heated();

    // Diamond
    event.recipes.createSandpaperPolishing(
        'minecraft:diamond',
        'kubejs:raw_diamond'
    );

    // Other
    event.recipes.createCrushing(
        'kubejs:ender_slag',
        'minecraft:end_stone'
    );
})