onEvent('recipes', event => {
    
    //------ Ore Processing ------//

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

    //------ Melting and Alloying ------//

    event.remove({id: 'create:mixing/brass_ingot'});
    event.remove({id: 'alloyed:mixing/bronze_ingot'});
    event.remove({id: 'alloyed:mixing/bronze_ingot_x3'});
    event.remove({id: 'alloyed:mixing/steel_ingot'});

    // Iron
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 90),
        ['minecraft:iron_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 10),
        ['minecraft:iron_nugget']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 90),
        ['minecraft:raw_iron']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 90),
        ['create:crushed_iron_ore']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 10),
        ['kubejs:refined_iron_ore']
    ).heated();

    // Copper
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 90),
        ['minecraft:copper_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 10),
        ['create:copper_nugget']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 90),
        ['minecraft:raw_copper']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 90),
        ['create:crushed_copper_ore']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 10),
        ['kubejs:refined_copper_ore']
    ).heated();

    // Gold
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 90),
        ['minecraft:gold_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 10),
        ['minecraft:gold_nugget']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 90),
        ['minecraft:raw_gold']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 90),
        ['create:crushed_gold_ore']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 10),
        ['kubejs:refined_gold_ore']
    ).heated();

    // Zinc
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 90),
        ['create:zinc_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 10),
        ['create:zinc_nugget']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 90),
        ['create:raw_zinc']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 90),
        ['create:crushed_zinc_ore']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 10),
        ['kubejs:refined_zinc_ore']
    ).heated();

    // Brass
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_brass', 90),
        ['create:brass_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_brass', 10),
        ['create:brass_nugget']
    ).heated();

    event.recipes.createMixing(
        Fluid.of('kubejs:molten_brass', 90), 
        [
            'minecraft:copper_ingot',
            'create:zinc_ingot'
        ]
    ).heated();

    event.recipes.createMixing(
        Fluid.of('kubejs:molten_brass', 180), 
        [
            Fluid.of('kubejs:molten_copper', 90),
            Fluid.of('kubejs:molten_zinc', 90)
        ]
    ).heated();

    // Bronze
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_bronze', 90),
        ['alloyed:bronze_ingot']
    ).heated();

    event.recipes.createMixing(
        Fluid.of('kubejs:molten_bronze', 360), 
        [
            Fluid.of('kubejs:molten_copper', 270),
            Fluid.of('kubejs:molten_zinc', 90),
            '4x create:cinder_flour'
        ]
    ).heated();

    // Steel
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_steel', 90),
        ['alloyed:steel_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_steel', 10),
        ['kubejs:steel_nugget']
    ).heated();

    event.recipes.createMixing(
        Fluid.of('kubejs:molten_steel', 270), 
        [
            Fluid.of('kubejs:molten_iron', 270),
            'kubejs:coke'
        ]
    ).heated();

    // Netherite
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_netherite', 90), 
        [
            Fluid.of('kubejs:molten_steel', 360),
            '4x minecraft:netherite_scrap'
        ]
    ).superheated();

    //------ Casting ------//

    event.recipes.createCompacting(
        'minecraft:iron_ingot',
        [
            Fluid.of('kubejs:molten_iron', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'minecraft:copper_ingot',
        [
            Fluid.of('kubejs:molten_iron', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'minecraft:gold_ingot',
        [
            Fluid.of('kubejs:molten_copper', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'create:zinc_ingot',
        [
            Fluid.of('kubejs:molten_gold', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'create:brass_ingot',
        [
            Fluid.of('kubejs:molten_zinc', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'alloyed:bronze_ingot',
        [
            Fluid.of('kubejs:molten_bronze', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'alloyed:steel_ingot',
        [
            Fluid.of('kubejs:molten_steel', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'minecraft:netherite_ingot',
        [
            Fluid.of('kubejs:molten_netherite_ingot', 90)
        ]
    );

    //------ Other Recipes ------//

    event.remove({id: 'create:sequenced_assembly/track'});
    event.remove({id: 'create:sequenced_assembly/strudy_sheet'});

    event.recipes.createSequencedAssembly(
        // Output
        [
            'create:track'
        ],
        // Input
        '#create:sleepers',
        // Sequence
        [
            event.recipes.createDeploying('create:incomplete_track', [
                'create:incomplete_track',
                'kubejs:steel_nugget'
            ]),
            event.recipes.createDeploying('create:incomplete_track', [
                'create:incomplete_track',
                'kubejs:steel_nugget'
            ]),
            event.recipes.createPressing('create:incomplete_track', [
                'create:incomplete_track'
            ])
        ]
    )
    .transitionalItem('create:incomplete_track').loops(1);

    event.recipes.createSequencedAssembly(
        // Output
        [
            'create:sturdy_sheet'
        ],
        // Input
        '#create:sleepers',
        // Sequence
        [
            event.recipes.createFilling('create:unprocessed_obsidian_sheet', [
                'create:unprocessed_obsidian_sheet',
                Fluid.of('minecraft:lava', 500)
            ]),
            event.recipes.createPressing('create:unprocessed_obsidian_sheet', [
                'create:unprocessed_obsidian_sheet'
            ]),
            event.recipes.createFilling('create:unprocessed_obsidian_sheet', [
                'create:unprocessed_obsidian_sheet',
                Fluid.of('kubejs:molten_steel', 90)
            ]),
            event.recipes.createPressing('create:unprocessed_obsidian_sheet', [
                'create:unprocessed_obsidian_sheet'
            ])
        ]
    )
    .transitionalItem('create:unprocessed_obsidian_sheet').loops(1);
});