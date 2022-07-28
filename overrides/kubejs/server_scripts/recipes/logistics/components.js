onEvent('recipes', event => {
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
            event.recipes.createDeploying(
                'create:incomplete_track', 
                [
                    'create:incomplete_track',
                    'kubejs:steel_nugget'
                ]
            ),
            event.recipes.createDeploying(
                'create:incomplete_track', 
                [
                    'create:incomplete_track',
                    'kubejs:steel_nugget'
                ]
            ),
            event.recipes.createPressing(
                'create:incomplete_track', 
                [
                    'create:incomplete_track'
                ]
            )
        ]
    )
    .transitionalItem('create:incomplete_track')
    .loops(1);

    event.recipes.createSequencedAssembly(
        // Output
        [
            'create:sturdy_sheet'
        ],
        // Input
        '#create:sleepers',
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
})