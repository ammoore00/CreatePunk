onEvent('recipes', event => {
    event.remove({output: 'create:electron_tube'});
    event.remove({output: 'createaddition:capacitor'});

    event.recipes.createSequencedAssembly(
        // Output
        [
            'create:electron_tube'
        ],
        // Input
        'create:iron_sheet',
        // Sequence
        [
            event.recipes.createDeploying('kubejs:incomplete_electron_tube', [
                'kubejs:incomplete_electron_tube',
                'createaddition:copper_wire'
            ]),
            event.recipes.createDeploying('kubejs:incomplete_electron_tube', [
                'kubejs:incomplete_electron_tube',
                'create:polished_rose_quartz'
            ])
        ]
    )
    .transitionalItem('kubejs:incomplete_electron_tube').loops(1);

    event.recipes.createSequencedAssembly(
        // Output
        [
            'kubejs:redstone_eye'
        ],
        // Input
        'create:iron_sheet',
        // Sequence
        [
            event.recipes.createDeploying('kubejs:incomplete_electron_tube', [
                'kubejs:incomplete_electron_tube',
                'createaddition:gold_wire'
            ]),
            event.recipes.createDeploying('kubejs:incomplete_electron_tube', [
                'kubejs:incomplete_electron_tube',
                'kubejs:polished_lapis'
            ])
        ]
    )
    .transitionalItem('kubejs:incomplete_electron_tube').loops(1);

    event.recipes.createSequencedAssembly(
        // Output
        [
            'createaddition:capacitor'
        ],
        // Input
        'create:iron_sheet',
        // Sequence
        [
            event.recipes.createDeploying('kubejs:incomplete_capacitor', [
                'kubejs:incomplete_capacitor',
                'createaddition:zinc_sheet'
            ]),
            event.recipes.createDeploying('kubejs:incomplete_capacitor', [
                'kubejs:incomplete_capacitor',
                'create:copper_sheet'
            ])
        ]
    )
    .transitionalItem('kubejs:incomplete_capacitor').loops(1);

    event.recipes.createSequencedAssembly(
        // Output
        [
            'createaddition:capacitor'
        ],
        // Input
        'create:iron_sheet',
        // Sequence
        [
            event.recipes.createDeploying('kubejs:incomplete_capacitor', [
                'kubejs:incomplete_capacitor',
                'create:copper_sheet'
            ]),
            event.recipes.createDeploying('kubejs:incomplete_capacitor', [
                'kubejs:incomplete_capacitor',
                'createaddition:zinc_sheet'
            ])
        ]
    )
    .transitionalItem('kubejs:incomplete_capacitor').loops(1);

    event.recipes.createSequencedAssembly(
        // Output
        [
            'kubejs:integrated_circuit'
        ],
        // Input
        'create:iron_sheet',
        // Sequence
        [
            event.recipes.createDeploying('kubejs:incomplete_integrated_circuit', [
                'kubejs:incomplete_integrated_circuit',
                'create:electron_tube'
            ]),
            event.recipes.createDeploying('kubejs:incomplete_integrated_circuit', [
                'kubejs:incomplete_integrated_circuit',
                'createaddition:capacitor'
            ]),
            event.recipes.createDeploying('kubejs:incomplete_integrated_circuit', [
                'kubejs:incomplete_integrated_circuit',
                'createaddition:gold_wire'
            ])
        ]
    )
    .transitionalItem('kubejs:incomplete_integrated_circuit').loops(3);
});