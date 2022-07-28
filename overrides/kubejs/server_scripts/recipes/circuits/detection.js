onEvent('recipes', event => {
    event.remove({id: 'minecraft:hopper'});

    // Detection
    event.remove({id: 'minecraft:comparator'});
    event.remove({id: 'minecraft:observer'});
    event.remove({id: 'create:crafting/logistics/content_observer'});
    event.remove({id: 'create:crafting/kinetics/track_observer'});
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
        '2x create:track_observer',
        [
            'create:railway_casing',
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
            V: 'littlelogistics:spring',
            S: '#bookshelf:stones'
        }
    )
})