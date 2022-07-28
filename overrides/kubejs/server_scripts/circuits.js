onEvent('recipes', event => {

    //------ Components ------//

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
        'create:sturdy_sheet',
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

    //------ Devices ------//

    event.remove({id: 'minecraft:hopper'});

    // Detection
    event.remove({id: 'minecraft:comparator'});
    event.remove({id: 'minecraft:observer'});
    event.remove({id: 'create:crafting/logistics/content_observer'});
    event.remove({id: 'create:crafting/kinetics/train_observer'});
    event.remove({id: 'littlelogistics:vessel_detector'});

    event.shaped(
        'minecraft:comparator',
        [
            ' R ',
            'RER',
            'SSS'
        ],
        {
            R: 'minecraft:redstone_torch',
            E: 'kubejs:redstone_eye',
            S: '#bookshelf:stones'
        }
    );

    event.shaped(
        'minecraft:observer',
        [
            'SSS',
            'RRE',
            'SSS'
        ],
        {
            R: 'minecraft:redstone',
            E: 'kubejs:redstone_eye',
            S: '#bookshelf:stones'
        }
    );

    event.shapeless(
        '2x create:train_observer',
        [
            'create:train_casing',
            'kubejs:redstone_eye'
        ]
    );

    event.shaped(
        'create:content_observer',
        [
            'E',
            'B',
            'T'
        ],
        {
            E: 'kubejs:redstone_eye',
            B: 'create:brass_casing',
            T: 'create:electron_tube'
        }
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
            V: 'littlelogistics:vehicle_chain',
            S: '#bookshelf:stones'
        }
    )

    // Electricity
    event.remove({id: 'create:crafting/logistics/redstone_link'});
    event.remove({id: 'createaddition:mechanical_crafting/alternator'});
    event.remove({id: 'createaddition:mechanical_crafting/electric_motor'});
    event.remove({id: 'createaddition:mechanical_crafting/tesla_coil'});
    event.remove({id: 'createaddition:mechanical_crafting/acculumlator'});
    event.remove({id: 'createaddition:mechanical_crafting/redstone_relay'});
    event.remove({id: 'littlelogistics:vessel_charger'});

    event.shaped(
        '2x create:redstone_link',
        [
            'I',
            'B'
        ],
        {
            I: 'kubejs:integrated_circuit',
            B: 'create:brass_casing'
        }
    );

    event.recipes.createMechanicalCrafting(
        'createaddition:alternator',
        [
            '  A  ',
            ' SCS ',
            'SCICS',
            ' SPS '
        ],
        {
            A: 'create:andesite_alloy',
            S: 'alloyed:steel_sheet',
            C: 'createaddition:copper_spool',
            I: 'kubejs:integrated_circuit',
            P: 'createaddition:capacitor'
        }
    );

    event.recipes.createMechanicalCrafting(
        'createaddition:electric_motor',
        [
            '  A  ',
            ' SCS ',
            'SCICS',
            ' SPS '
        ],
        {
            A: 'create:andesite_alloy',
            S: 'alloyed:bronze_sheet',
            C: 'createaddition:copper_spool',
            I: 'kubejs:integrated_circuit',
            P: 'createaddition:capacitor'
        }
    );

    event.recipes.createMechanicalCrafting(
        'createaddition:tesla_coil',
        [
            'CCC',
            ' A ',
            'PBP',
            'SIS'
        ],
        {
            C: 'createaddition:copper_spool',
            A: 'create:andesite_alloy',
            P: 'createaddition:capacitor',
            B: 'create:brass_casing',
            S: 'alloyed:bronze_sheet',
            I: 'kubejs:integrated_circuit'
        }
    );

    event.recipes.createMechanicalCrafting(
        'createadditions:accumulator',
        [
            ' C C ',
            'SPGPS',
            'SPBPS',
            'SPIPS'
        ],
        {
            C: 'createaddition:connector',
            S: 'alloyed:bronze_sheet',
            P: 'createaddition:capacitor',
            G: 'createaddition:gold_spool',
            B: 'create:brass_casing',
            I: 'create:integrated_circuit'
        }
    );

    event.shaped(
        'minecraft:comparator',
        [
            'CIC',
            'SSS'
        ],
        {
            C: 'createaddition:connector',
            I: 'kubejs:integrated_circuit',
            S: '#bookshelf:stones'
        }
    );

    event.recipes.createMechanicalCrafting(
        'littlelogistics:vessel_charger',
        [
            ' E E ',
            'SPGPS',
            'SPBPS',
            'SPIPS'
        ],
        {
            E: 'create:electron_tube',
            S: 'alloyed:bronze_sheet',
            P: 'createaddition:capacitor',
            G: 'createaddition:gold_spool',
            B: 'create:brass_casing',
            I: 'create:integrated_circuit'
        }
    );
});