onEvent('block.modification', event => {
    event.modify('minecraft:obsidian', block => {
        block.destroySpeed = 25;
    });
    event.modify('minecraft:crying_obsidian', block => {
        block.destroySpeed = 25;
    });

    for (let i = 1; i <= 16; i++) {
        event.modify('chipped:obsidian_' + i, block => {
            block.destroySpeed = 25;
        });
        event.modify('chipped:crying_obsidian_' + i, block => {
            block.destroySpeed = 25;
        });        
    }
});