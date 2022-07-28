onEvent('recipes', event => {
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
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.125)
        ],
        'minecraft:coal_ore'
    );
    event.recipes.createCrushing(
        [
            '2x kubejs:crushed_coal',
            Item.of('kubejs:crushed_coal').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobbled_deepslate').withChance(0.125)
        ],
        'minecraft:deepslate_coal_ore'
    );
    
    event.recipes.createCrushing(
        [
            'kubejs:crushed_coal'
        ],
        'minecraft:coal'
    );
    event.recipes.createCrushing(
        [
            '9x kubejs:crushed_coal'
        ],
        'minecraft:coal_block'
    )
    
    event.recipes.createCrushing(
        [
            Item.of('kubejs:crushed_coal').withChance(0.78),
            Item.of('supplementaries:ash').withChance(0.22)
        ],
        'minecraft:charcoal'
    );
    event.recipes.createCrushing(
        [
            '7x kubejs:crushed_coal',
            '2x supplementaries:ash'
        ],
        'quark:charcoal_block'
    );
    
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
        [
            '9x kubejs:refined_coal_dust'
        ]
    ).heated();
})