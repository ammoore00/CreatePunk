onEvent('recipes', event => {
    
    //------ Steel ------//

    event.remove({
        input: 'alloyed:steel_ingot',
        type: 'smithing'
    });
    event.remove({
        input: 'alloyed:steel_ingot',
        type: 'createMechanicalCrafting'
    });

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

    event.shaped(
        'alloyed:steel_knife',
        [
            ' I',
            'S '
        ],
        {
            I: 'alloyed:steel_ingot',
            S: 'minecraft:stick'
        }
    );

    event.shaped(
        'alloyed:steel_shears',
        [
            ' I',
            'I '
        ],
        {
            I: 'alloyed:steel_ingot'
        }
    );

    event.shaped(
        'alloyed:steel_fishing_rod',
        [
            '  I',
            ' IS',
            'I S'
        ],
        {
            I: 'alloyed:steel_ingot',
            S: 'minecraft:string'
        }
    );

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

    //------ Diamond ------//

    event.replaceInput('minecraft:diamond', 'kubejs:diamondium_ingot');

    event.remove({id: 'minecraft:diamond_pickaxe'});
    event.remove({id: 'minecraft:diamond_axe'});
    event.remove({id: 'minecraft:diamond_shovel'});
    event.remove({id: 'minecraft:diamond_hoe'});
    event.remove({id: 'minecraft:diamond_sword'});
    event.remove({id: 'minecraft:diamond_knife'});

    event.smithing(
        'minecraft:diamond_pickaxe',
        'alloyed:steel_pickaxe',
        'kubejs:diamondium_ingot'
    );

    event.smithing(
        'minecraft:diamond_axe',
        'alloyed:steel_axe',
        'kubejs:diamondium_ingot'
    );

    event.smithing(
        'minecraft:diamond_shovel',
        'alloyed:steel_shovel',
        'kubejs:diamondium_ingot'
    );

    event.smithing(
        'minecraft:diamond_hoe',
        'alloyed:steel_hoe',
        'kubejs:diamondium_ingot'
    );

    event.smithing(
        'minecraft:diamond_sword',
        'alloyed:steel_sword',
        'kubejs:diamondium_ingot'
    );

    event.smithing(
        'farmersdelight:diamond_knife',
        'alloyed:steel_knife',
        'kubejs:diamondium_ingot'
    );
    
    event.shaped(
        'kubejs:diamond_chisel',
        [
            ' D',
            'S '
        ],
        {
            D: 'minecraft:diamond',
            S: 'minecraft:stick'
        }
    )

    event.remove({id: 'minecraft:diamond_helmet'});
    event.remove({id: 'minecraft:diamond_chestplate'});
    event.remove({id: 'minecraft:diamond_leggings'});
    event.remove({id: 'minecraft:diamond_boots'});

    event.smithing(
        'minecraft:diamond_helmet',
        'alloyed:steel_helmet',
        'kubejs:diamondium_ingot'
    );

    event.smithing(
        'minecraft:diamond_chestplate',
        'alloyed:steel_chestplate',
        'kubejs:diamondium_ingot'
    );

    event.smithing(
        'minecraft:diamond_leggings',
        'alloyed:steel_leggings',
        'kubejs:diamondium_ingot'
    );

    event.smithing(
        'minecraft:diamond_boots',
        'alloyed:steel_boots',
        'kubejs:diamondium_ingot'
    );

    //------Netherite ------//

    event.smithing(
        'minecraft:netherite_pickaxe',
        'alloyed:steel_pickaxe',
        'minecraft:netherite_ingot'
    );

    event.smithing(
        'minecraft:netherite_axe',
        'alloyed:steel_axe',
        'minecraft:netherite_ingot'
    );

    event.smithing(
        'minecraft:netherite_shovel',
        'alloyed:steel_shovel',
        'minecraft:netherite_ingot'
    );

    event.smithing(
        'minecraft:netherite_hoe',
        'alloyed:steel_hoe',
        'minecraft:netherite_ingot'
    );

    event.smithing(
        'minecraft:netherite_sword',
        'alloyed:steel_sword',
        'minecraft:netherite_ingot'
    );

    event.smithing(
        'farmersdelight:netherite_knife',
        'alloyed:steel_knife',
        'minecraft:netherite_ingot'
    );

    event.smithing(
        'minecraft:netherite_helmet',
        'alloyed:steel_helmet',
        'minecraft:netherite_ingot'
    );

    event.smithing(
        'minecraft:netherite_chestplate',
        'alloyed:steel_chestplate',
        'minecraft:netherite_ingot'
    );

    event.smithing(
        'minecraft:netherite_leggings',
        'alloyed:steel_leggings',
        'minecraft:netherite_ingot'
    );

    event.smithing(
        'minecraft:netherite_boots',
        'alloyed:steel_boots',
        'minecraft:netherite_ingot'
    );
});