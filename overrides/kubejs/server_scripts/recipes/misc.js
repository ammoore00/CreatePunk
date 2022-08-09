onEvent('recipes', event => {
    event.shapeless(
        '9x minecraft:bone',
        [
            'valhelsia_structures:bone_pile_block'
        ]
    );

    event.replaceInput('graveyard:dark_iron_ingot', 'createdeco:cast_iron_ingot');

    event.replaceInput({output: 'minecraft:iron_door'}, 'minecraft:iron_ingot', 'create:iron_sheet');
    event.replaceInput({output: 'graveyard:dark_iron_door'}, 'create_deco:cast_iron_ingot', 'createdeco:cast_iron_sheet');
    event.replaceInput({output: 'supplementaries:gold_door'}, 'minecraft:gold_ingot', 'create:golden_sheet');
    event.replaceInput({output: 'supplementaries:netherite_door'}, 'supplementaries:gold_door', 'alloyed:steel_door');
    event.replaceInput({output: 'alloyed:steel_door'}, 'alloyed:steel_ingot', 'alloyed:steel_sheet');
    event.replaceInput({output: 'alloyed:locked_steel_door'}, 'alloyed:steel_ingot', 'alloyed:steel_sheet');
    event.replaceInput({output: 'createdeco:brass_door'}, 'create:brass_ingot', 'create:brass_sheet');
    event.replaceInput({output: 'createdeco:locked_brass_door'}, 'create:brass_ingot', 'create:brass_sheet');
    event.replaceInput({output: 'createdeco:copper_door'}, 'minecraft:copper_ingot', 'create:copper_sheet');
    event.replaceInput({output: 'createdeco:locked_copper_door'}, 'minecraft:copper_ingot', 'create:copper_sheet');
    event.replaceInput({output: 'createdeco:zinc_door'}, 'create:zinc_ingot', 'create:zinc_sheet');
    event.replaceInput({output: 'createdeco:locked_zinc_door'}, 'create:zinc_ingot', 'create:zinc_sheet');
    event.replaceInput({output: 'mcwdoors:metal_door'}, 'minecraft:iron_ingot', 'create:iron_sheet');
    event.replaceInput({output: 'mcwdoors:metal_hospital_door'}, 'minecraft:iron_ingot', 'create:iron_sheet');

    event.replaceInput({output: 'minecraft:iron_trapdoor'}, 'minecraft:iron_ingot', 'create:iron_sheet');
    event.replaceInput({output: 'graveyard:dark_iron_trapdoor'}, 'create_deco:cast_iron_ingot', 'createdeco:cast_iron_sheet');
    event.replaceInput({output: 'supplementaries:gold_trapdoor'}, 'minecraft:gold_ingot', 'create:golden_sheet');
    event.replaceInput({output: 'supplementaries:netherite_trapdoor'}, 'supplementaries:gold_trapdoor', 'alloyed:steel_trapdoor');
    event.replaceInput({output: 'alloyed:steel_trapdoor'}, 'alloyed:steel_ingot', 'alloyed:steel_sheet');
    event.replaceInput({output: 'createdeco:brass_trapdoor'}, 'create:brass_ingot', 'create:brass_sheet');
    event.replaceInput({output: 'createdeco:copper_trapdoor'}, 'minecraft:copper_ingot', 'create:copper_sheet');
    event.replaceInput({output: 'createdeco:zinc_trapdoor'}, 'create:zinc_ingot', 'create:zinc_sheet');
    event.replaceInput({output: 'mcwdoors:metal_trapdoor'}, 'minecraft:iron_ingot', 'create:iron_sheet');
    event.replaceInput({output: 'mcwdoors:metal_full_trapdoor'}, 'minecraft:iron_ingot', 'create:iron_sheet');
});

onEvent('tags.items', event => {
    event.add('quark:boatable_chests', ['everycomp:q/twigs/stripped_bamboo_chest', 'everycomp:q/fruittrees/cherry_chest', 'everycomp:q/fruittrees/citrus_chest', 'everycomp:q/valhelsia_structures/lapidified_jungle_chest']);
    event.add('quark:revertable_chests', ['everycomp:q/twigs/stripped_bamboo_chest', 'everycomp:q/fruittrees/cherry_chest', 'everycomp:q/fruittrees/citrus_chest', 'everycomp:q/valhelsia_structures/lapidified_jungle_chest']);
    event.add('quark:revertable_trapped_chests', ['everycomp:q/twigs/stripped_bamboo_trapped_chest', 'everycomp:q/fruittrees/cherry_trapped_chest', 'everycomp:q/fruittrees/citrus_trapped_chest', 'everycomp:q/valhelsia_structures/lapidified_jungle_trapped_chest']);
})