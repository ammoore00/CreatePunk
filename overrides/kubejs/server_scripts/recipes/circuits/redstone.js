onEvent('recipes', event => {
    event.remove({id: 'minecraft:hopper'});

    event.remove({id: 'minecraft:repeater'});
    event.remove({id: 'quark:tweaks/crafting/utility/misc/repeater'});
    event.remove({id: 'minecraft:comparator'});
    event.remove({id: 'minecraft:observer'});
    event.remove({id: 'create:crafting/logistics/content_observer'});
    event.remove({id: 'create:crafting/logistics/redstone_link'});
    event.remove({id: 'create:crafting/logistics/pulse_extender'});
    event.remove({id: 'create:crafting/logistics/pulse_repeater'});
    event.remove({id: 'quark:automation/crafting/redstone_randomizer'});

    event.shaped(
        'minecraft:repeater',
        [
            'RDR',
            'SSS'
        ],
        {
            R: 'minecraft:redstone_torch',
            D: 'minecraft:redstone',
            S: '#bookshelf:stones'
        }
    );

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
    ).id('createpunk:circuits/redstone/comparator');

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
    ).id('createpunk:circuits/redstone/observer');

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
        '2x create:redstone_link',
        [
            'I',
            'B',
            'S'
        ],
        {
            I: 'kubejs:integrated_circuit',
            B: 'create:brass_casing',
            S: 'alloyed:bronze_sheet'
        }
    );

    event.shaped(
        'create:pulse_extender',
        [
            '  R',
            'CBR',
            'SSS'
        ],
        {
            R: 'minecraft:redstone_torch',
            C: 'createaddition:capacitor',
            B: 'alloyed:bronze_sheet',
            S: '#bookshelf:stones'
        }
    );

    event.shaped(
        'create:pulse_repeater',
        [
            'TBR',
            'SSS'
        ],
        {
            R: 'minecraft:redstone_torch',
            T: 'create:electron_tube',
            B: 'alloyed:bronze_sheet',
            S: '#bookshelf:stones'
        }
    );

    event.shaped(
        'quark:redstone_randomizer',
        [
            ' R ',
            'RIR',
            'SSS'
        ],
        {
            R: 'minecraft:redstone_torch',
            I: 'kubejs:integrated_circuit',
            S: '#bookshelf:stones'
        }
    );
})