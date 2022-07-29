onEvent('recipes', event => {
    event.replaceInput({id: 'minecraft:enchanting_table'}, 'minecraft:diamond', 'kubejs:polished_diamond');
    event.replaceInput({id: 'minecraft:jukebox'}, 'minecraft:diamond', 'kubejs:polished_diamond');
    event.replaceInput('minecraft:diamond', 'kubejs:diamondium_ingot');
})