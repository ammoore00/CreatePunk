onEvent('recipes', event => {
    event.remove({id: 'chunkloaders:basic_chunk_loader'});
    event.remove({id: 'chunkloaders:advanced_chunk_loader'});
    event.remove({id: 'chunkloaders:ultimate_chunk_loader'});

    event.shaped(
        'chunkloaders:basic_chunk_loader',
        [
            'SOS',
            'OEO',
            'SOS'
        ],
        {
            S: 'create:iron_sheet',
            O: '#forge:obsidian',
            E: 'minecraft:ender_pearl'
        }
    );

    event.shaped(
        'chunkloaders:advanced_chunk_loader',
        [
            'SPS',
            'PLP',
            'SPS'
        ],
        {
            S: 'alloyed:steel_sheet',
            P: 'create:precision_mechanism',
            L: 'chunkloaders:basic_chunk_loader'
        }
    );

    event.shaped(
        'chunkloaders:advanced_chunk_loader',
        [
            'SPS',
            'PLP',
            'SPS'
        ],
        {
            S: 'createdeco:netherite_sheet',
            P: 'create:precision_mechanism',
            L: 'chunkloaders:basic_chunk_loader'
        }
    );
})