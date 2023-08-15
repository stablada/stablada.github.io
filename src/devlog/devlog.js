var mainPane = document.getElementById("content");

function updateContent(content) {
    switch (content) {
        case "home":
            mainPane.innerHTML = "<h1>Home</h1>\n" +
                "    <ul id=\"articleList\">\n" +
                "        <li class=\"articleItem\"><a onclick=\"updateContent('article1')\">\n" +
                "            <h3>Devlog 1: Game Development, Begin!</h3>\n" +
                "            <p>April 7, 2023</p>\n" +
                "        </a></li>\n" +
                "        <li class=\"articleItem\"><a onclick=\"updateContent('article2')\">\n" +
                "            <h3>Devlog 2: This Is Just The Start!</h3>\n" +
                "            <p>April 8, 2023</p>\n" +
                "        </a></li>\n" +
                "        <li class=\"articleItem\"><a onclick=\"updateContent('article3')\">\n" +
                "            <h3>Devlog 3: Let there be assets!</h3>\n" +
                "            <p>June 2, 2023</p>\n" +
                "        </a></li>\n" +
                "        <li class=\"articleItem\"><a onclick=\"updateContent('article4')\">\n" +
                "            <h3>Devlog 4: The Engine Reignites!</h3>\n" +
                "            <p>August 15, 2023</p>\n" +
                "        </a></li>\n" +
                "    </ul>";
            break;
        case "article1":
            mainPane.innerHTML = "<a class=\"backbtn\" onclick=\"updateContent('home')\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M20 9v6h-8v4.84L4.16 12L12 4.16V9h8Z\"/></svg></a>" +
                "<h1>Article 1: Game Development, Begin!</h1>" +
                "<p>April 7, 2023</p>" +
                "<h2>Heya Everyone!</h2>" +
                "<p>Today's entry is based on the progress I made on my game idea, titled \"Platinum Crown\". This game is a PvE Roguelike top-down exponentially scaling game in which players unlock the options to mix and match several different systems to change the nature of their character. Essentially this game would be the lovechild of Diablo III, Risk of Rain, and League of Legends. The way I'm designing this game is hyper-focused on the replayability of it. I want players to play this game and want to find new ways to play characters. Find new combinations and reinvent build paths for their characters (that may not be so much optimized, but fun). Thus, this game will likely take me years to create, but I do want to get that idea out there and really take the time to create this game, and make it as polished as can be. \n" +
                "Essentially, Here's the idea!</p>" +
                "<h2>Characters</h2>" +
                "<p>Physical Assassin, Damaging Mage, Necromancer, Alchemist, Swordmaster, Tank, Healer. These are the first ideas I had thinking of a game like this. The first and foremost thing I went into was character design. One I'm most proud of is my design for the swordmaster; I made their ultimate not a move, but an on-screen wheel that allows you to select the weapon of your choice, giving the player the ability to switch entire playstyles on a whim. The caveat to this ability, keeping it in check is the fact your items and relics are not changing along with the weapons you swap to. In other words, going Shield and Spear will likely not be as tanky as simply playing tank, but it will be tankier than base swordsmaster. This concept can both be a limiter and a blessing, as this means that the weapon you build for will perform incredibly. Also, as most of their kit is focused on being a physical damage based character, if you build physical damage it will help your entire kit in one way or another. This essentially allows this character to be built in a myriad of ways, ranging from full bruiser to full tank to even full glass cannon. A mix will likely be best for this character, but no matter what a player does this character will likely be viable. This allows for fun gameplay with the player thinking \"what if I built x item on this character\". This is exactly the idea I'm going for in this game. I want all characters to have a build path that is suggested, guiding the player with the basic idea of the character, but also be available to change in build and be flexible enough most things will be viable in play. This rewards both min-maxing players and players playing for casual fun.</p>" +
                "<h2>Items and Stats</h2>" +
                "<p>Items come in three tiers: Basic, Gifted, Blessed. These three tiers are indicative of different attributes. Basic items are centered around giving small stat upgrades, have no effects, and are very low in cost. Basic Items can be combined to create Gifted items at the Forge (a section right next to the shop at level start). Gifted items give bigger stat upgrades, and include a small effect, they can either be created by aforementioned combination, or can directly be bought from the shop for a higher price. Finally, combining two Gifted items results in a Blessed item. This item type is characterized by a very strong effect on top of the two gifted effects (in some cases it can simply make an effect stronger). As well, the item bonuses of the two Gifted items are combined into an item with better bonuses, but are at a higher price margin if purchased directly from the shop. The shop displays the player's currency, current items, as well as several items of the three tiers for each stat. For example, the Health section will contain four Basic health stat increase items, three Gifted, and two Blessed. This allows the game to contain the RNG feel all roguelikes will have, but does still keep some semblance of the build control a player should have. To add to this, there is an extra inventory slots all characters have, being the \"Consumable\" (Potion) slot. There are several different types of potions with different effects that can be purchased from vendors and placed in this slot (which will remain taken up until either used or sold)." +
                "Stats include the following: Armor, Knockback Reduction, Anti-spell, Physical Damage, Attack Speed, Attack Range, Critical Chance, Critical Damage, Physical Peirce, Magic Damage, Magic Peirce, Lifesteal, Cooldown, Health, Mana Pool, Mana Regeneration, Magic Buffer, Move Speed, Luck, and finally Chaos. As you can likely tell, there are in fact many different stats to augment with items and relics. This opens the game up to many different opportunities and builds. Soon, I will create a detailed explanation of all Stats and their effects and meanings.</p>" +
                "<h2>Relics</h2>" +
                "<p>Relics are gifts bestowed by the gods. Each of these relics has its own shape, with one of 3 Core Upgrades (Cores). These are major effects that have a large impact on gameplay. After selecting your core, you can select up to 3 of 8 different Secondaries, smaller effects that still impact gameplay but end up being mostly a small bonus to your build path. These effects are generally useful and don't necessarily define the gameplay so much as they aid in making a certain playstyle more fun. Here is an example of the UI for relics.</p>" +
                "<div class=\"dragonImg\"><img src=\"/assets/dragonRelic.jpg\" alt=\"Relic UI\"></div>" +
                "<p>That concludes this Devlog. I made a good amount of progress and feel satisfied with the level I've flushed all this out. Pretty soon I'll begin the actual mechanics of the game. Naming for everything is still only tentative but I'll flush it all out and make sure things fit the style I want soon enough. Thank you for reading this and have a great day!</p>";
            break;
        case "article2":
            mainPane.innerHTML = "<a class=\"backbtn\" onclick=\"updateContent('home')\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M20 9v6h-8v4.84L4.16 12L12 4.16V9h8Z\"/></svg></a>" +
                "<h1>Article 2: This Is Just The Start!</h1>" +
                "<p>April 8, 2023</p>" +
                "<h2>Hi There!</h2>" +
                "<p>Today's work was primarily focused on the player's movement. I focused on myself and learning the basics of Scripts with C#. It seems to (obviously) be one of the C languages, and to be quite frank, reminds me a good bit of Java. This obviously applies to a large variety of different coding languages, but all in all what it means for me is that I feel more comfortable with this than if Unity had its own whacky coding language. Let's go C#!</p>" +
                "<p>Here is an image showcasing the on-click player movement idea I wanted to expand on. Essentially the mechanic this uses is drawing a line from the center of the cube to where the mouse was clicked, and uses physics to accelerate to that coordinate set on the plane. This is just the start, as I have a lot of mechanics to code in, ranging from an indicator of some sort to showcase where the block is going to move, as well as a system aiding in movement around objects, and not just phasing through them or getting stuck. This pathing system is dependent on the system I want to go for, but to be completely honest, as a quality of life decision I'm going to implement it. I dislike the idea of wanting to get around a set of crates and getting stuck on them because the player-model doesn't understand that the player wants to go around. Anyhow, today's work was mostly centered around learning for myself so that I don't have to constantly rely on tutorials like I used to. I feel that immersing myself in this is going to be the key to truly learning and making my dreams come true on this front; without that, I'm basically going to be combining lots of other people's code into a mess I only really call my own. My goal is to make it my own by writing my own code and learning from it.</p>" +
                "<div class=\"dragonImg\"><img src=\"/assets/unityMovement.jpg\" alt=\"Unity Movement\"></div>" +
                "<p>All in all, I have a lot of work to do and am looking forward to creating new updates for you (and myself). Thank you for reading this and I wish you the best of luck in your own projects! Have a great day!</p>";
            break;
        case "article3":
            mainPane.innerHTML = "<a class=\"backbtn\" onclick=\"updateContent('home')\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M20 9v6h-8v4.84L4.16 12L12 4.16V9h8Z\"/></svg></a>" +
                "<h1>Article 3: Let there be assets!</h1>" +
                "<p>June 2, 2023</p>" +
                "<h2>Hiya Yall!</h2>" +
                "<p>So today, I'd like to update you all on the progress I've made! It's been a decent bit since my last posting, but this is an important one. I've taken some time to research more into game design AND game asset creation. Turns out it's not as easy as I've thought! I was (quite comedically) under the impression you can just kinda make things happen with ease but I now realize that's not really the case. These models have been rough and tough, but we've made them work! Here is my progress update for thus far...</p>" +
                "<h2>Stats</h2>" +
                "<p>So I've implemented both the stats and levelup systems in their most basic forms. These are just two of the biggest mechanics of the game, and so I wanted to start with those. These scripts essentially take on the most basic actions the game does \"behind the scenes\"! I can't wait to make them useful now by making the rest of the game. At least I know these scripts are made in their most basic sense and ready to go!</p>" +
                "<div class=\"dragonImg\"><img src=\"/assets/stats.jpg\" alt=\"Stats\"></div>" +
                "<h2>Blender</h2>" +
                "<p>One of the more interesting technologies I decided to give a shot was Blender. I have some basic experience with 3D software as my highschool years were at an engineering school, and I was taught to use SolidWorks for basic CADing solutions. Unfortunately for me, no amount of SolidWorks could have prepared me for this tough program. From sculpting to shader nodes to uv texture maps, I learned a lot about this program and was able to make several cool little projects before I really dove into the game design aspect! Here are two images of my progress. Both of these models started from a single cube, and were subdivision surfaced and extruded and sculpted into the beauties they are now. The low-poly style is what I'm going for, as it doesn't really matter how realistic or not my textures look. These textures are going to be pixelated for the final result, as my goal is to use a shader on my game that essentially bakes it into pixel art! Thus, smaller details are not really necessary, but efficiency and performance is.</p>" +
                "<div class=\"dragonImg\"><img src=\"/assets/sickle3DRender.png\" alt=\"Blender Sickle Asset\"></div>" +
                "<div class=\"dragonImg\"><img src=\"/assets/lowPolyRelic.jpg\" alt=\"Low Poly Relic\"></div>" +
                "<h2>Summary and Goals</h2>" +
                "<p>In sum, I've worked alot on 3d modelling to be able to create my world one pixel at a time! As well, I'm implementing C# scripts day by day until eventually this bad boy will be ready to go! I can't wait to update you all more! Take care of yourselves and don't forget your worth in this world. Anybody can create something amazing. Let's keep building!</p>";
            break;
        case "article4":
            mainPane.innerHTML = "<a class=\"backbtn\" onclick=\"updateContent('home')\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M20 9v6h-8v4.84L4.16 12L12 4.16V9h8Z\"/></svg></a>" +
                "<h1>Article 4: The Engine Reignites!</h1>" +
                "<p>August 15, 2023</p>" +
                "<h2>Why Hello There!</h2>" +
                "<p>So, I've actually been doing alot of work on  this project on the side! I have a friend actually joining me on this project in the character/systems design aspect, and I'm very excited to keep working on this project!</p>" +
                "<h2>Characters</h2>" +
                "<p>Characters are all controlled using a classic Point and Click mechanic (which in this case is the nifty usage of an AI Navmesh Component in unity) and have 4 abilities. These are by default bound to Q W E R and have LMB as base attack and RMB as move. This can be keybound to the player's liking. The defaults are designed to match the general convention of Q being damage, W being buffs/heals/status, E being utility, and R being ultimate. This is by no means set in stone as some characters may simply not have a buff of any sort or anything remotely near ulility. Nonetheless, the kits of these characters are designed to flow with eachother, with some abilities reseting or even empowering others, or causing status effects that make themselves more useful. This creates an environment that fuels the character's own playstyle. On the other hand, despite this synergy, most kits also have alternate ways of being played. For example, where a support healer can be focused on items that empower healing, they may also be able to build pure magic damage and become (albeit a good bit inefficient compared to other mages) a glass cannon that can play offense more than defense. Here is an example of a kit created that depicts a necromancer who is able to raise skeleton thralls (which are just NPC skeletons that attack the nearest enemy).</p>" +
                "<div class=\"dragonImg\"><img src=\"/assets/necroStats.png\" alt=\"Necromancer Stats and Abilities\"></div>" +
                "<h2>Art</h2>" +
                "<p>I've made some progress on the UI itself! My intent is to simply create different UI elements for every character. For example, the Necromancer has a bone/skeleton themed hud with purple accents and purple ability frames. I'm excited to show you more about these elements!</p>" +
                "<div class=\"dragonImg\"><img src=\"/assets/abilArt.PNG\" alt=\"Blender Sickle Asset\"></div>" +
                "<p>Very excited to showcase more as I build more! I'll bring updates as they come! Check in soon for some possible early early alpha footage! Talk to you soon!</p>";
            break;
    }
}