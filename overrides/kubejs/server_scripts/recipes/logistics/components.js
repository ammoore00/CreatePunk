onEvent('recipes', event => {
    event.remove({id: 'create:sequenced_assembly/sturdy_sheet'});
    event.remove({id: 'create:sequenced_assembly/precision_mechanism'});

    event.recipes.createSequencedAssembly(
        // Output
        [
            'create:sturdy_sheet'
        ],
        // Input
        'create:powdered_obsidian',
        // Sequence
        [
            event.recipes.createFilling(
                'create:unprocessed_obsidian_sheet', 
                [
                    'create:unprocessed_obsidian_sheet',
                    Fluid.of('minecraft:lava', 500)
                ]
            ),
            event.recipes.createPressing(
                'create:unprocessed_obsidian_sheet', 
                [
                    'create:unprocessed_obsidian_sheet'
                ]
            ),
            event.recipes.createFilling(
                'create:unprocessed_obsidian_sheet', 
                [
                    'create:unprocessed_obsidian_sheet',
                    Fluid.of('kubejs:molten_steel', 90)
                ]
            ),
            event.recipes.createPressing(
                'create:unprocessed_obsidian_sheet', 
                [
                    'create:unprocessed_obsidian_sheet'
                ]
            )
        ]
    )
    .transitionalItem('create:unprocessed_obsidian_sheet')
    .loops(1);

    event.recipes.createSequencedAssembly(
        // Output
        [
            Item.of('create:precision_mechanism').withChance(120),
            Item.of('alloyed:bronze_sheet').withChance(8),
            Item.of('create:andesite_alloy').withChance(8),
            Item.of('create:cogwheel').withChance(5),
            Item.of('create:shaft').withChance(2),
            Item.of('create:crushed_gold_ore').withChance(2),
            Item.of('kubejs:bronze_nugget').withChance(2),
            Item.of('alloyed:steel_ingot').withChance(2)
        ],
        // Input
        'alloyed:bronze_sheet',
        // Sequence
        [
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                [
                    'create:incomplete_precision_mechanism',
                    'create:cogwheel'
                ]
            ),
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                [
                    'create:incomplete_precision_mechanism',
                    'create:large_cogwheel'
                ]
            ),
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                [
                    'create:incomplete_precision_mechanism',
                    'kubejs:steel_nugget'
                ]
            )
        ]
    )
    .transitionalItem('create:incomplete_precision_mechanism')
    .loops(5);
})