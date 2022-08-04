onEvent('tags.items', event => {
    event.add('createpunk:meals', [
        "minecraft:rabbit_stew", "minecraft:mushroom_stew", "minecraft:beetroot_soup",
        
        "farmersdelight:pasta_with_mutton_chop", "farmersdelight:baked_cod_stew", "farmersdelight:roasted_mutton_chops", "farmersdelight:beef_stew", "farmersdelight:pasta_with_meatballs", "farmersdelight:fried_rice", 
        "farmersdelight:vegetable_soup", "farmersdelight:vegetable_noodles", "farmersdelight:squid_ink_pasta", "farmersdelight:shepherds_pie", "farmersdelight:honey_glazed_ham", "farmersdelight:bacon_and_eggs", 
        "farmersdelight:pumpkin_soup", "farmersdelight:steak_and_potatoes", "farmersdelight:fish_stew", "farmersdelight:roast_chicken", "farmersdelight:stuffed_pumpkin", "farmersdelight:chicken_soup", 
        "farmersdelight:grilled_salmon", "farmersdelight:ratatouille", "farmersdelight:noodle_soup", "farmersdelight:cabbage_rolls", "farmersdelight:egg_sandwich", "farmersdelight:hamburger", "farmersdelight:bacon_sandwich", 
        "farmersdelight:chicken_sandwich", "farmersdelight:mutton_wrap", "farmersdelight:fruit_salad", "farmersdelight:mixed_salad", "farmersdelight:dumplings", "farmersdelight:stuffed_potato", "farmersdelight:barbecue_stick", 
        "farmersdelight:nether_salad", 
        
        "farmersrespite:blazing_chili", "farmersrespite:black_cod", "farmersrespite:tea_curry", 
        
        "corn_delight:corn_soup", "corn_delight:corn_dog", "corn_delight:classic_corn_dog", "corn_delight:taco", "corn_delight:creamed_corn", 
        
        "fruittrees:lemon_roast_chicken", "fruittrees:rice_with_fruits", "fruittrees:grapefruit_panna_cotta", "fruittrees:donauwelle", 
        
        "nethersdelight:strider_moss_stew", "nethersdelight:grilled_strider", "nethersdelight:plate_of_stuffed_hoglin_snout", "nethersdelight:plate_of_stuffed_hoglin_ham", "nethersdelight:plate_of_stuffed_hoglin_roast", 
        "nethersdelight:nether_skewer", "nethersdelight:warped_moldy_meat", 
        
        "ecologics:tropical_stew",

        "kubejs:cornbread_stuffing"
    ]);

    event.add('createpunk:meals_placed', [
        'farmersdelight:roast_chicken_block', 'farmersdelight:stuffed_pumpkin_block', 'farmersdelight:honey_glazed_ham_block', 'farmersdelight:shepherds_pie_block',

        'corn_delight:nachos_block',

        'nethersdelight:stuffed_hoglin'
    ]);

    event.add('createpunk:food', [
        '#createpunk:meals',

        'minecraft:apple', 'minecraft:bread', 'minecraft:porkchop', 'minecraft:cooked_porkchop', 'minecraft:golden_apple', 'minecraft:enchanted_golden_apple', 'minecraft:cod', 'minecraft:salmon', 'minecraft:tropical_fish',
        'minecraft:pufferfish', 'minecraft:cooked_cod', 'minecraft:cooked_salmon', 'minecraft:cake', 'minecraft:cookie', 'minecraft:melon_slice', 'minecraft:dried_kelp', 'minecraft:beef', 'minecraft:cooked_beef', 
        'minecraft:chicken', 'minecraft:cooked_chicken', 'minecraft:rotten_flesh', 'minecraft:spider_eye', 'minecraft:carrot', 'minecraft:potato', 'minecraft:baked_potato', 'minecraft:poisonous_potato', 'minecraft:pumpkin_pie',
        'minecraft:rabbit', 'minecraft:cooked_rabbit', 'minecraft:mutton', 'minecraft:cooked_mutton', 'minecraft:beetroot', 'minecraft:sweet_berries', 'minecraft:glow_berries', 'minecraft:honey_bottle', 

        'farmersdelight:cabbage', 'farmersdelight:tomato', 'farmersdelight:onion', 'farmersdelight:rice_panicle', 'farmersdelight:rice', 'farmersdelight:fried_egg', 'farmersdelight:tomato_sauce', 'farmersdelight:wheat_dough', 
        'farmersdelight:raw_pasta', 'farmersdelight:pumpkin_slice', 'farmersdelight:cabbage_leaf', 'farmersdelight:minced_beef', 'farmersdelight:beef_patty', 'farmersdelight:chicken_cuts', 'farmersdelight:cooked_chicken_cuts',
        'farmersdelight:bacon', 'farmersdelight:cooked_bacon', 'farmersdelight:cod_slice', 'farmersdelight:cooked_cod_slice', 'farmersdelight:salmon_slice', 'farmersdelight:cooked_salmon_slice', 'farmersdelight:mutton_chops',
        'farmersdelight:cooked_mutton_chops', 'farmersdelight:ham', 'farmersdelight:smoked_ham', 'farmersdelight:pie_crust', 'farmersdelight:apple_pie', 'farmersdelight:sweet_berry_cheesecake', 'farmersdelight:chocolate_pie',
        'farmersdelight:cake_slice', 'farmersdelight:apple_pie_slice', 'farmersdelight:sweet_berry_cheesecake_slice', 'farmersdelight:chocolate_pie_slice', 'farmersdelight:sweet_berry_cookie', 'farmersdelight:honey_cookie',
        'farmersdelight:melon_popsicle',

        'farmersrespite:green_tea_cookie', 'farmersrespite:nether_wart_sourdough', 'farmersrespite:coffee_cake', 'farmersrespite:coffee_cake_slice', 'farmersrespite:rose_hip_pie', 'farmersrespite:rose_hip_pie_slice',

        'corn_delight:corn', 'corn_delight:corn_seeds', 'corn_delight:popcorn', 'corn_delight:caramel_popcorn', 'corn_delight:creamy_corn_drink', 'corn_delight:cornbread_batter', 'corn_delight:cornbread', 'corn_delight:tortilla_raw',
        'corn_delight:tortilla', 'corn_delight:tortilla_chip',

        'nethersdelight:hoglin_loin', 'nethersdelight:hoglin_sirloin', 'nethersdelight:strider_slice', 'nethersdelight:ground_strider', 'nethersdelight:hoglin_ear', 'nethersdelight:propelpearl', 'nethersdelight:magma_gelatin',

        'fruittrees:cherry', 'fruittrees:redlove', 'fruittrees:mandarin', 'fruittrees:lime', 'fruittrees:citron', 'fruittrees:pomelo', 'fruittrees:orange', 'fruittrees:lemon', 'fruittrees:grapefruit', 'fruittrees:honey_pomelo_tea',

        'biomemakeover:glowfish', 'biomemakeover:cooked_glowfish', 'biomemakeover:raw_toad', 'biomemakeover:cooked_toad', 'biomemakeover:bulbus_root', 'biomemakeover:roasted_bulbus_root',

        'ecologics:coconut_slice', 'ecologics:crab_meat', 'ecologics:prickly_pear', 'ecologics:cooked_prickly_pear', 'ecologics:walnut',

        'create:bar_of_chocolate', 'create:sweet_roll', 'create:chocolate_glazed_berries', 'create:honeyed_apple',

        'quark:crab_leg', 'quark:cooked_crab_leg',

        'goodall:raw_venison', 'goodall:cooked_venison',

        'supplementaries:candy', 'supplementaries:pancake',

        'buzzier_bees:honey_bread', 'buzzier_bees:glazed_porkchop',

        "kubejs:grilled_corn", "kubejs:boiled_corn"
    ])
});