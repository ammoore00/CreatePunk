onEvent('recipes', event => {
    event.remove({id: 'create:sequenced_assembly/track'});
    event.remove({id: 'create:crafting/kinetics/track_observer'});
    event.remove({id: 'create:crafting/kinetics/controls'});
    event.remove({id: 'littlelogistics:vessel_detector'});

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

    event.shapeless(
        '2x create:track_observer',
        [
            'create:railway_casing',
            'kubejs:redstone_eye'
        ]
    );

    event.shaped(
        'littlelogistics:vessel_detector',
        [
            'SES',
            'SBS',
            'SVS'
        ],
        {
            E: 'kubejs:redstone_eye',
            B: 'create:brass_casing',
            V: 'littlelogistics:spring',
            S: '#bookshelf:stones'
        }
    )
})