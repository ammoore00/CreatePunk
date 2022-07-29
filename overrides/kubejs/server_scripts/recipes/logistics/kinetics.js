onEvent('recipes', event => {

    //------ Devices ------//

    event.remove({id: 'create:crafting/kinetics/deployer'});
    event.remove({id: 'create:crafting/kinetics/sequenced_gearshift'});

    event.shaped(
        'create:deployer',
        [
            'S',
            'B',
            'H'
        ],
        {
            S: 'create:shaft',
            B: 'create:brass_casing',
            H: 'create:brass_hand'
        }
    );

    event.shapeless(
        'create:sequenced_gearshift',
        [
            'create:brass_casing',
            'create:cogwheel',
            'kubejs:integrated_circuit'
        ]
    )

    //------ Vehicles ------//

    event.remove({id: 'create:sequenced_assembly/track'});
    event.remove({id: 'create:crafting/kinetics/track_observer'});
    event.remove({id: 'create:crafting/kinetics/track_observer_from_other_plates'});

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

    event.remove({id: 'littlelogistics:spring'});
    event.remove({id: 'littlelogistics:receiver_component'});
    event.remove({id: 'littlelogistics:transmitter_component'});
    event.remove({id: 'littlelogistics:tug_route'});
    event.remove({id: 'littlelogistics:locomotive_route'});

    event.shapeless(
        'littlelogistics:spring',
        [
            'create:minecart_coupling'
        ]
    );
    event.shapeless(
        'create:minecart_coupling',
        [
            'littlelogistics:spring'
        ]
    );

    event.shaped(
        '4x littlelogistics:transmitter_component',
        [
            'T',
            'B'
        ],
        {
            T: 'create:electron_tube',
            B: 'create:brass_sheet'
        }
    );

    event.shaped(
        '4x littlelogistics:receiver_component',
        [
            'E',
            'B'
        ],
        {
            E: 'kubejs:redstone_eye',
            B: 'create:brass_sheet'
        }
    );

    event.shapeless(
        'littlelogistics:tug_route',
        [
            'littlelogistics:transmitter_component',
            'create:iron_sheet'
        ]
    );

    event.shapeless(
        'littlelogistics:locomotive_route',
        [
            'littlelogistics:tug_route'
        ]
    );
    event.shapeless(
        'littlelogistics:tug_route',
        [
            'littlelogistics:locomotive_route'
        ]
    );

    event.remove({id: 'littlelogistics:rapid_hopper'});
    event.remove({id: 'littlelogistics:fluid_hopper'});

    event.shapeless(
        'littlelogistics:fluid_hopper',
        [
            'create:fluid_tank'
        ]
    );
    event.shapeless(
        'create:fluid_tank',
        [
            'littlelogistics:fluid_hopper'
        ]
    );

    event.remove({id: 'littlelogistics:barge'});
    event.remove({id: 'littlelogistics:chunk_loader_barge'});
    event.remove({id: 'littlelogistics:fishing_barge'});
    event.remove({id: 'littlelogistics:fluid_barge'});
    event.remove({id: 'littlelogistics:seater_barge'});
    event.remove({id: 'littlelogistics:tug'});
    event.remove({id: 'littlelogistics:energy_tug'});
    event.remove({id: 'littlelogistics:contraption_barge'});

    event.shaped(
        'littlelogistics:barge',
        [
            'BCB',
            'III'
        ],
        {
            B: 'alloyed:bronze_ingot',
            C: '#forge:chests',
            I: 'createdeco:cast_iron_ingot'
        }
    );

    event.shaped(
        'littlelogistics:chunk_loader_barge',
        [
            'BCB',
            'III'
        ],
        {
            B: 'alloyed:bronze_ingot',
            C: 'chunkloaders:basic_chunk_loader',
            I: 'createdeco:cast_iron_ingot'
        }
    );

    event.shaped(
        'littlelogistics:fishing_barge',
        [
            'NNN',
            'III'
        ],
        {
            N: 'farmersdelight:safety_net',
            I: 'createdeco:cast_iron_ingot'
        }
    );

    event.shaped(
        'littlelogistics:fluid_barge',
        [
            'BTB',
            'III'
        ],
        {
            B: 'alloyed:bronze_ingot',
            T: 'create:fluid_tank',
            I: 'createdeco:cast_iron_ingot'
        }
    );

    event.shaped(
        'littlelogistics:seater_barge',
        [
            'BSB',
            'III'
        ],
        {
            B: 'alloyed:bronze_ingot',
            S: '#create:seats',
            I: 'createdeco:cast_iron_ingot'
        }
    );

    event.shaped(
        'littlelogistics:contraption_barge',
        [
            'BAB',
            'III'
        ],
        {
            B: 'alloyed:bronze_ingot',
            A: 'create:andesite_alloy',
            I: 'createdeco:cast_iron_ingot'
        }
    );

    event.shaped(
        'littlelogistics:tug',
        [
            'W  ',
            'TSF',
            'III'
        ],
        {
            W: 'create:steam_whistle',
            T: 'create:fluid_tank',
            S: 'create:steam_engine',
            F: 'create:flywheel',
            I: 'createdeco:cast_iron_ingot'
        }
    );

    event.shaped(
        'littlelogistics:energy_tug',
        [
            'PCP',
            'III'
        ],
        {
            P: 'createaddition:capacitor',
            C: 'littlelogistics:vessel_charger',
            I: 'createdeco:cast_iron_ingot'
        }
    );

    event.remove({id: 'littlelogistics:seater_car'});
    event.remove({id: 'littlelogistics:chest_car'});
    event.remove({id: 'littlelogistics:fluid_car'});
    event.remove({id: 'littlelogistics:chunk_loader_car'});
    event.remove({id: 'littlelogistics:steam_locomotive'});
    event.remove({id: 'littlelogistics:energy_locomotive'});

    event.shaped(
        'littlelogistics:seater_car',
        [
            'P P',
            'BBB',
            'I I'
        ],
        {
            P: '#minecraft:planks',
            B: 'alloyed:bronze_ingot',
            I: 'createdeco:cast_iron_ingot'
        }
    );

    event.shaped(
        'littlelogistics:chest_car',
        [
            'C',
            'M'
        ],
        {
            C: '#forge:chests',
            M: 'littlelogistics:seater_car'
        }
    );

    event.shaped(
        'littlelogistics:fluid_car',
        [
            'T',
            'M'
        ],
        {
            T: 'create:fluid_tank',
            M: 'littlelogistics:seater_car'
        }
    );

    event.shaped(
        'littlelogistics:chunk_loader_car',
        [
            'L',
            'M'
        ],
        {
            L: 'chunkloaders:basic_chunk_loader',
            M: 'littlelogistics:seater_car'
        }
    );

    event.shaped(
        'littlelogistics:steam_locomotive',
        [
            'W  ',
            'TSF',
            'IMI'
        ],
        {
            W: 'create:steam_whistle',
            T: 'create:fluid_tank',
            S: 'create:steam_engine',
            F: 'create:flywheel',
            I: 'createdeco:cast_iron_ingot',
            M: 'littlelogistics:seater_car'
        }
    );

    event.shaped(
        'littlelogistics:energy_locomotive',
        [
            'PCP',
            'IMI'
        ],
        {
            P: 'createaddition:capacitor',
            C: 'littlelogistics:vessel_charger',
            I: 'createdeco:cast_iron_ingot',
            M: 'littlelogistics:seater_car'
        }
    );

    event.remove({id: 'littlelogistics:vessel_detector'});
    event.remove({id: 'littlelogistics:vessel_charger'});

    event.shaped(
        'littlelogistics:vessel_detector',
        [
            'SSS',
            'VBE',
            'SSS'
        ],
        {
            E: 'kubejs:redstone_eye',
            B: 'create:brass_casing',
            V: 'littlelogistics:spring',
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
            I: 'kubejs:integrated_circuit'
        }
    );
})