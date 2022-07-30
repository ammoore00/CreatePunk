onEvent('recipes', event => {
    event.remove({id: 'create:mixing/brass_ingot'});
    event.remove({id: 'alloyed:mixing/bronze_ingot'});
    event.remove({id: 'alloyed:mixing/bronze_ingot_x3'});
    event.remove({id: 'alloyed:mixing/steel_ingot'});
    event.remove({id: 'minecraft:netherite_ingot'});

    // Iron
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 90),
        ['minecraft:iron_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 90),
        ['create:iron_sheet']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 10),
        ['minecraft:iron_nugget']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 90),
        ['minecraft:raw_iron']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 90),
        ['create:crushed_iron_ore']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_iron', 10),
        ['kubejs:refined_iron_ore']
    ).heated();

    // Copper
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 90),
        ['minecraft:copper_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 90),
        ['create:copper_sheet']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 10),
        ['create:copper_nugget']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 90),
        ['minecraft:raw_copper']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 90),
        ['create:crushed_copper_ore']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_copper', 10),
        ['kubejs:refined_copper_ore']
    ).heated();

    // Gold
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 90),
        ['minecraft:gold_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 90),
        ['create:gold_sheet']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 10),
        ['minecraft:gold_nugget']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 90),
        ['minecraft:raw_gold']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 90),
        ['create:crushed_gold_ore']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_gold', 10),
        ['kubejs:refined_gold_ore']
    ).heated();

    // Zinc
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 90),
        ['create:zinc_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 90),
        ['createaddition:zinc_sheet']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 10),
        ['create:zinc_nugget']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 90),
        ['create:raw_zinc']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 90),
        ['create:crushed_zinc_ore']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_zinc', 10),
        ['kubejs:refined_zinc_ore']
    ).heated();

    // Brass
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_brass', 90),
        ['create:brass_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_brass', 90),
        ['create:brass_sheet']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_brass', 10),
        ['create:brass_nugget']
    ).heated();

    event.recipes.createMixing(
        Fluid.of('kubejs:molten_brass', 90), 
        [
            'minecraft:copper_ingot',
            'create:zinc_ingot'
        ]
    ).heated();

    event.recipes.createMixing(
        Fluid.of('kubejs:molten_brass', 180), 
        [
            Fluid.of('kubejs:molten_copper', 90),
            Fluid.of('kubejs:molten_zinc', 90)
        ]
    ).heated();

    // Bronze
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_bronze', 90),
        ['alloyed:bronze_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_bronze', 90),
        ['alloyed:bronze_sheet']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_bronze', 10),
        ['kubejs:bronze_nugget']
    ).heated();

    event.recipes.createMixing(
        Fluid.of('kubejs:molten_bronze', 360), 
        [
            Fluid.of('kubejs:molten_copper', 270),
            Fluid.of('kubejs:molten_zinc', 90),
            '4x create:cinder_flour'
        ]
    ).heated();

    // Steel
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_steel', 90),
        ['alloyed:steel_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_steel', 90),
        ['alloyed:steel_sheet']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_steel', 10),
        ['kubejs:steel_nugget']
    ).heated();

    event.recipes.createMixing(
        Fluid.of('kubejs:molten_steel', 270), 
        [
            Fluid.of('kubejs:molten_iron', 270),
            'kubejs:coke'
        ]
    ).heated();

    // Diamond
    event.recipes.createSequencedAssembly(
        // Output
        [
            'kubejs:diamondium_ingot'
        ],
        // Input
        'alloyed:steel_ingot',
        // Sequence
        [
            event.recipes.createDeploying(
                'kubejs:unprocessed_diamondium_ingot', 
                [
                    'kubejs:unprocessed_diamondium_ingot',
                    'createaddition:diamond_grit'
                ]
            ),
            event.recipes.createFilling(
                'kubejs:unprocessed_diamondium_ingot', 
                [
                    'kubejs:unprocessed_diamondium_ingot',
                    Fluid.of('kubejs:molten_steel', '90')
                ]
            ),
            event.recipes.createPressing(
                'kubejs:unprocessed_diamondium_ingot', 
                [
                    'kubejs:unprocessed_diamondium_ingot'
                ]
            )
        ]
    )
    .transitionalItem('kubejs:unprocessed_diamondium_ingot')
    .loops(4);

    // Netherite
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_netherite', 90),
        ['minecraft:netherite_ingot']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_netherite', 90),
        ['createdeco:netherite_sheet']
    ).heated();
    event.recipes.createMixing(
        Fluid.of('kubejs:molten_netherite', 10),
        ['createdeco:netherite_nugget']
    ).heated();

    event.recipes.createMixing(
        Fluid.of('kubejs:molten_netherite', 90), 
        [
            Fluid.of('kubejs:molten_steel', 90),
            '4x minecraft:netherite_scrap',
            'kubejs:ender_slag'
        ]
    ).superheated();
})