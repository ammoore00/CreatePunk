onEvent('recipes', event => {
    event.remove({id: 'createaddition:mechanical_crafting/alternator'});
    event.remove({id: 'createaddition:mechanical_crafting/electric_motor'});
    event.remove({id: 'createaddition:mechanical_crafting/tesla_coil'});
    event.remove({id: 'createaddition:mechanical_crafting/accumulator'});
    event.remove({id: 'createaddition:crafting/redstone_relay'});
    event.remove({id: 'littlelogistics:vessel_charger'});

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
        'createaddition:accumulator',
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
            I: 'kubejs:integrated_circuit'
        }
    );

    event.shaped(
        'createaddition:redstone_relay',
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
            I: 'kubejs:integrated_circuit'
        }
    );
})