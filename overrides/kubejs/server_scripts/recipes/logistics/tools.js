onEvent('recipes', event => {
    event.remove({id: 'alloyed:smithing/steel_pickaxe'});
    event.remove({id: 'alloyed:smithing/steel_axe'});
    event.remove({id: 'alloyed:smithing/steel_shovel'});
    event.remove({id: 'alloyed:smithing/steel_hoe'});
    event.remove({id: 'alloyed:smithing/steel_sword'});

    event.shaped(
        'alloyed:steel_pickaxe',
        [
            'III',
            ' S ',
            ' S '
        ],
        {
            I: 'alloyed:steel_ingot',
            S: 'minecraft:stick'
        }
    );

    event.shaped(
        'alloyed:steel_axe',
        [
            'II',
            'IS',
            ' S'
        ],
        {
            I: 'alloyed:steel_ingot',
            S: 'minecraft:stick'
        }
    );

    event.shaped(
        'alloyed:steel_shovel',
        [
            'I',
            'S',
            'S'
        ],
        {
            I: 'alloyed:steel_ingot',
            S: 'minecraft:stick'
        }
    );

    event.shaped(
        'alloyed:steel_hoe',
        [
            'II',
            ' S',
            ' S'
        ],
        {
            I: 'alloyed:steel_ingot',
            S: 'minecraft:stick'
        }
    );

    event.shaped(
        'alloyed:steel_sword',
        [
            'I',
            'I',
            'S'
        ],
        {
            I: 'alloyed:steel_ingot',
            S: 'minecraft:stick'
        }
    );

    event.remove({id: 'alloyed:smithing/steel_helmet'});
    event.remove({id: 'alloyed:smithing/steel_chestplate'});
    event.remove({id: 'alloyed:smithing/steel_leggings'});
    event.remove({id: 'alloyed:smithing/steel_boots'});

    event.shaped(
        'alloyed:steel_helmet',
        [
            'III',
            'I I'
        ],
        {
            I: 'alloyed:steel_ingot'
        }
    );

    event.shaped(
        'alloyed:steel_chestplate',
        [
            'I I',
            'III',
            'III'
        ],
        {
            I: 'alloyed:steel_ingot'
        }
    );

    event.shaped(
        'alloyed:steel_leggings',
        [
            'III',
            'I I',
            'I I'
        ],
        {
            I: 'alloyed:steel_ingot'
        }
    );

    event.shaped(
        'alloyed:steel_boots',
        [
            'I I',
            'I I'
        ],
        {
            I: 'alloyed:steel_ingot'
        }
    );
});