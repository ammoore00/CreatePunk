onEvent('recipe', event => {
    event.shapeless(
        '9x kubejs:steel_nugget',
        [
            'alloyed:steel_ingot'
        ]
    );
    event.shaped(
        'alloyed:steel_ingot',
        [
            'NNN',
            'NNN',
            'NNN'
        ],
        {
            N: 'kubejs:steel_nugget'
        }
    );

    event.shapeless(
        '9x kubejs:bronze_nugget',
        [
            'alloyed:bronze_ingot'
        ]
    );
    event.shaped(
        'alloyed:bronze_ingot',
        [
            'NNN',
            'NNN',
            'NNN'
        ],
        {
            N: 'kubejs:bronze_nugget'
        }
    );
});

onEvent('tags.items', event => {
    event.add('forge:nuggets', ['kubejs:steel_nugget', 'kubejs:iron_nugget']);
    event.add('forge:nuggets/steel', 'kubejs:steel_nugget');
    event.add('forge:nuggets/bronze', 'kubejs:bronze_nugget');

    event.add('forge:raw_materials', 'kubejs:raw_diamond');
    event.add('forge:raw_materials/diamond', 'kubejs:raw_diamond');

    event.add('forge:ingots', 'kubejs:diamondium_ingot');
    event.add('forge:ingots/diamond', 'kubejs:diamondium_ingot');
})