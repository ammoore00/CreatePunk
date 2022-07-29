onEvent('recipes', event => {
    event.recipes.createCompacting(
        'minecraft:iron_ingot',
        [
            Fluid.of('kubejs:molten_iron', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'minecraft:copper_ingot',
        [
            Fluid.of('kubejs:molten_copper', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'minecraft:gold_ingot',
        [
            Fluid.of('kubejs:molten_gold', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'create:zinc_ingot',
        [
            Fluid.of('kubejs:molten_zinc', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'create:brass_ingot',
        [
            Fluid.of('kubejs:molten_brass', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'alloyed:bronze_ingot',
        [
            Fluid.of('kubejs:molten_bronze', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'alloyed:steel_ingot',
        [
            Fluid.of('kubejs:molten_steel', 90)
        ]
    );
    
    event.recipes.createCompacting(
        'minecraft:netherite_ingot',
        [
            Fluid.of('kubejs:molten_netherite', 90)
        ]
    );
})