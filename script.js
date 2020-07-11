function clearshoplist() {
    shoppingblock = document.getElementById("coresource")
    shoppingblock.innerHTML = ''
    shoppingtext = ''
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

function injectrecipes(listid, rlist) {
    var resultlist = document.getElementById(listid)
    for (var i in rlist) {
        resultlist.insertAdjacentHTML('beforeend', '<option style = "background-image: "icons/' +rlist[i].icon +'"; background-size: "32px 32px";" value = "' + rlist[i].name + '">')
    }
}


class recipe {
    constructor(name, i1, i2 = [nullingredient], i3 = [nullingredient], icon = "null.png") {
        this.name = name
        this.i1 = i1
        this.i2 = i2
        this.i3 = i3
        this.icon = icon
    }
}

class core {
    constructor(name, origin = '', icon = "null.png") {
        this.name = name
        this.origin = origin
        this.icon = icon
    }
}

var nullingredient = new core("None")

var cactusflesh = new core("Cactus Flesh", "Harvestable from Echinocactus")
var faecium = new core("Faecium", "Harvestable from Gutrot Flowers")
var mordite = new core("Mordite", "Harvestable from Mordite Root or by killing animals")
var frostcrystal = new core("Frost Crystal", "Harvestable from Frostwort")
var fungalmould = new core("Fungal Mould", "Harvestable from Fungal Clusters")
var gammaroot = new core("Gamma Root", "Harvestable from Gamma Weed")
var kelpsac = new core("Kelp Sac", "Harvestable from Candle Kelp")
var marrowbulb = new core("Marrow Bulb", "Harvestable from Cave Marrow")
var solanium = new core("Solanium", "Harvestable from Solar Vine")
var starbulb = new core("Star Bulb", "Harvestable from Star Bramble")

var aloeflesh = new core("Aloe Flesh", "Barren planet wilderness")
var fireberry = new core("Fireberry", "Scorched planet wilderness")
var frozentubers = new core("Frozen Tubers", "Frozen planet wilderness")
var grahberry = new core("Grahberry", "Irradiated planet wilderness")
var heptawheat = new core("Heptaploid Wheat", "Any planet wilderness")
var hexaberry = new core("Hexaberry", "Exotic planet wilderness")
var impulsebeans = new core("Impulse Beans", "Lush planet wilderness")
var jadepeas = new core("Jade Peas", "Toxic planet wilderness")
var pulpyroots = new core("Pulpy Roots", "All planet wilderness")
var sweetroot = new core("Sweetroot", "All planet wilderness")

var meatychunks = new core("Meaty Chunks", "Harvested from killing animals")
var felineliver = new core("Feline Liver", "Harvested from killing animals")
var offalsac = new core("Offal Sac", "Harvested from killing animals")
var legmeat = new core("Leg Meat", "Harvested from killing animals")
var scalymeat = new core("Scaly Meat", "Harvested from killing animals")
var rawsteak = new core("Raw Steak", "Harvested from killing animals")
var stridersausage = new core("Strider Sausage", "Harvested from killing animals")
var diplochunks = new core("Diplo Chunks", "Harvested from killing animals")
var protosausage = new core("ProtoSausage", "Harvested from killing animals")
var fiendishroe = new core("Fiendish Roe", "Harvested from killing animals")
var meatywings = new core("Meaty Wings", "Harvested from killing animals")
var saltyfingers = new core("Salty Fingers", "Harvested from killing underwater animals")

var egg = new core("Egg", "Harvested from tamed chicken-like animals")
var milk = new core("Milk", "Harvested from tamed animals")
var protomilk = new core("Warm Proto-Milk", "Harvested from freaking tamed furries of all things")
var stickyhoney = new core("Sticky 'Honey'", "Harvested from tamed blob animals")

var larvalcore = new core("Larval Core", "Harvested at Abandoned Buildings")
var hypnoeye = new core("Hypnotic Eye", "Abyssal Horror drop")
var chromametal = new core("Chromatic Metal", "Refined stellar metal")
var carbon = new core("Carbon", "Plants, red crystals")
var ccarbon = new core("Condensed Carbon", "Refined carbon")
var salt = new core("Salt", "Various rocks and plants underwater")
var crabapple = new core("Crab 'Apple'", "Harvested from tamed crab creatures")
var leopardfruit = new core("Leopard-Fruit", "Harvested from tamed large/medium mammal predators")
var regisgrease = new core("Regis Grease", "Harvested from tamed dinosaur creatures")
var carbonnanotubes = new core("Carbon Nanotubes", "Crafted from Carbon by hand")

var cactusnectar = new recipe("Cactus Nectar", [cactusflesh])
var wildyeast = new recipe("Wild Yeast", [faecium])
var meatflakes = new recipe("Meat Flakes", [mordite])
var glassgrains = new recipe("Glass Grains", [frostcrystal])
var nontoxicmush = new recipe("Non-Toxic Mushroom", [fungalmould])
var sievertbeans = new recipe("Sievert Beans", [gammaroot])
var kelprice = new recipe("Kelp Rice", [kelpsac])
var marrowflesh = new recipe("Marrow Flesh", [marrowbulb])
var solartillo = new recipe("Solartillo", [solanium])
var pilgrimberry = new recipe("Pilgrimberry", [starbulb])

var processedsugar = new recipe("Processed Sugar", [cactusnectar, grahberry, sweetroot])
var refinedflour = new recipe("Refined Flour", [glassgrains, kelprice, heptawheat])
var steamedveggies = new recipe("Steamed Vegetables", [marrowflesh, nontoxicmush, sievertbeans, solartillo, frozentubers, hexaberry, jadepeas])
var pilgrimtonic = new recipe("Pilgrim's Tonic", [pilgrimberry])
var refreshingdrink = new recipe("Refreshing Drink", [aloeflesh])
var firewater = new recipe("Fire Water", [fireberry])
var bittersweetcocoa = new recipe("Bittersweet Cocoa", [impulsebeans])
var rootjuice = new recipe("Root Juice", [pulpyroots])

var meatychunksAlt = new recipe("Meaty Chunks (self-made)", [meatflakes])
var processedmeat = new recipe("Processed Meat", [meatychunks, meatychunksAlt, felineliver, offalsac, legmeat, scalymeat, rawsteak, stridersausage, diplochunks, protosausage, fiendishroe, meatywings])
var horrifyingmush = new recipe("Horrifying Mush", [hypnoeye])
var siliconegg = new recipe("Silicon Egg", [chromametal])

var bakedeggs = new recipe("Baked Eggs", [egg, larvalcore])
var cream = new recipe("Cream", [milk])
var protocream = new recipe("Proto-Cream", [protomilk])
var butter = new recipe("Churned Butter", [cream])
var protobutter = new recipe("Proto-Butter", [protocream])
var cheese = new recipe("Tangy Cheese", [cream], [wildyeast])
var protocheese = new recipe("ProtoCheese", [protocream], [wildyeast])
var synthhoney = new recipe("Synthetic Honey", [stickyhoney])

var smokedmeat = new recipe("Smoked Meat", [meatywings, meatychunks, meatychunksAlt, felineliver, offalsac, legmeat, scalymeat, rawsteak, stridersausage, diplochunks, protosausage, offalsac, fiendishroe], [carbon, ccarbon])

var scorchingsauce = new recipe("Scorching Sauce (Fire Water)", [firewater], [firewater, fireberry, solartillo, sievertbeans, grahberry])
var scorchingsauceAlt = new recipe("Scorching Sauce (Root Juice)", [rootjuice], [fireberry, solartillo, sievertbeans, grahberry])
var flavoursomesauce = new recipe("Flavoursome Sauce", [steamedveggies], [steamedveggies, rootjuice])
var creamysauce = new recipe("Creamy Sauce", [cream, protocream], [cream, protocream])
var cheesesauce = new recipe("Partially-Liquid Cheese", [cream, protocream], [cheese, protocheese])

var meatstew = new recipe("Mystery Meat Stew", [meatychunks, meatychunksAlt, scalymeat, processedmeat, smokedmeat, meatywings, diplochunks, scalymeat, stridersausage, rawsteak], [meatychunks, meatychunksAlt, scalymeat, processedmeat, smokedmeat, meatywings, diplochunks, scalymeat, stridersausage, rawsteak, protosausage])
var spicyfleshballs = new recipe("Spicy Fleshballs", [meatstew], [scorchingsauce, scorchingsauceAlt])
var herbencrustedflesh = new recipe("Herb-Encrusted Flesh", [meatstew], [flavoursomesauce])
var thickmeatstew = new recipe("Thick Meat Stew", [meatstew], [creamysauce])
var cheeseandflesh = new recipe("Cheese-and-Flesh Stew", [meatstew], [cheesesauce])

var fibrousstew = new recipe("Fibrous Stew", [pulpyroots, solartillo, sievertbeans, sweetroot, impulsebeans, nontoxicmush, jadepeas], [pulpyroots, solartillo, sievertbeans, sweetroot, impulsebeans, nontoxicmush, jadepeas, steamedveggies])
var fieryveggiestew = new recipe("Fiery Vegetable Stew", [fibrousstew], [scorchingsauce, scorchingsauceAlt])
var deliciousveggiestew = new recipe("Delicious Vegetable Stew", [fibrousstew], [flavoursomesauce])
var creamveggiestew = new recipe("Cream of Vegetable Soup", [fibrousstew], [creamysauce])
var tangyveggiestew = new recipe("Tangy Vegetable Stew", [fibrousstew], [cheesesauce])

var stewedorgans = new recipe("Stewed Organs", [offalsac, felineliver], [offalsac, felineliver])
var devilledorgans = new recipe("Devilled Organs", [stewedorgans], [scorchingsauce, scorchingsauceAlt])
var flavoursomeorgans = new recipe("Flavoursome Organs", [stewedorgans], [flavoursomesauce])
var creamedorgansoup = new recipe("Creamed Organ Soup", [stewedorgans], [creamysauce])
var tangyorgansurprise = new recipe("Tangy Organ Surprise", [stewedorgans], [cheesesauce])

var abyssalstew = new recipe("Abyssal Stew", [hypnoeye, horrifyingmush, processedmeat, smokedmeat, meatychunks, meatychunksAlt, offalsac, felineliver, meatywings, protosausage, diplochunks, scalymeat, stridersausage, rawsteak, steamedveggies, impulsebeans, solartillo, jadepeas, nontoxicmush, sievertbeans, sweetroot, pulpyroots], [hypnoeye, horrifyingmush])

var sweetprotobutter = new recipe("Sweetened Proto-Butter", [protobutter], [processedsugar])
var gooeyprotobutter = new recipe("Gooey Proto-Butter", [protobutter], [stickyhoney])
var honeyprotobutter = new recipe("Honied Proto-Butter", [protobutter], [synthhoney])
var protooil = new recipe("Proto-Oil", [protobutter], [protobutter])

var sweetbutter = new recipe("Sweetened Butter", [butter], [processedsugar])
var gooeybutter = new recipe("Gooey Butter", [butter], [stickyhoney])
var honeybutter = new recipe("Honey Butter", [butter], [synthhoney])
var oil = new recipe("Clarified Oil", [butter], [butter, protobutter])

var crunchycaramel = new recipe("Crunchy Caramel (Sugar)", [processedsugar], [salt])
var crunchycaramelAlt = new recipe("Crunchy Caramel (Root Juice)", [rootjuice])
var anomalousjam = new recipe("Anomalous Jam", [hexaberry], [processedsugar])
var burningjam = new recipe("Ever-burning Jam", [fireberry], [processedsugar])
var grahjam = new recipe("Grahj'am", [grahberry], [processedsugar])
var wrigglingjam = new recipe("Wriggling Jam", [crabapple], [processedsugar])
var furballjelly = new recipe("Furball Jelly", [leopardfruit], [processedsugar])
var cactusjelly = new recipe("Cactus Jelly", [cactusnectar], [processedsugar])

var viscouscustard = new recipe("Viscous Custard", [egg], [cream], [processedsugar])
var saltycustard = new recipe("Salty Custard", [salt], [cream], [processedsugar])
var monstrouscustard = new recipe("Monstrous Custard", [larvalcore], [cream], [processedsugar])
var stellarcustard = new recipe("Stellar Custard", [siliconegg], [cream], [processedsugar])

var icecream = new recipe("Ice Cream", [viscouscustard], [frostcrystal, frozentubers])
var appleicecream = new recipe("'Apple' Ice Cream", [viscouscustard], [frostcrystal, frozentubers], [crabapple])
var caramelicecream = new recipe("Caramel Ice Cream", [viscouscustard], [frostcrystal, frozentubers], [crunchycaramel, crunchycaramelAlt])
var chocolateicecream = new recipe("Chocolate Ice Cream", [viscouscustard], [frostcrystal, frozentubers], [bittersweetcocoa])
var fruityicecream = new recipe("Fruity Ice Cream", [viscouscustard], [frostcrystal, frozentubers], [cactusjelly, cactusnectar, furballjelly, leopardfruit, pilgrimberry, sweetroot])
var honeyicecream = new recipe("Honey Ice Cream", [viscouscustard], [frostcrystal, frozentubers], [stickyhoney, synthhoney])
var perpetualicecream = new recipe("Perpetual Ice Cream", [viscouscustard], [frostcrystal, frozentubers], [anomalousjam, hexaberry])
var spicedicecream = new recipe("Spiced Ice", [viscouscustard], [frostcrystal, frozentubers], [burningjam, fireberry])
var vyicecream = new recipe("Vy'Ice Cream", [viscouscustard], [frostcrystal, frozentubers], [grahjam, grahberry])
var icedscreams = new recipe("Iced Screams", [horrifyingmush, hypnoeye], [frostcrystal, frozentubers])
var brineyrime = new recipe("Briney Rime", [saltycustard], [frostcrystal, frozentubers])
var deathlyicecream = new recipe("Deathly-Cold Ice Cream", [monstrouscustard], [frostcrystal, frozentubers])
var stellaricecream = new recipe("Stellar Ice Cream", [siliconegg], [frostcrystal, frozentubers])

var dough = new recipe("Dough", [refinedflour], [wildyeast])
var pastry = new recipe("Pastry", [refinedflour], [butter, protobutter])
var delicatemeringue = new recipe("Delicate Meringue", [egg, larvalcore], [processedsugar])

var lumpendoughnut = new recipe("Lumpen Doughnut", [dough], [oil], [processedsugar])
var protobeignet = new recipe("Proto-Beignet", [dough], [protooil], [processedsugar])

var bread = new recipe("Bread", [dough])
var piecase = new recipe("Pie Case", [pastry])

var extrafluffybatter = new recipe("Extra-Fluffy Batter", [refinedflour], [egg], [delicatemeringue])
var thicksweetbatter = new recipe("Thick, Sweet Batter", [refinedflour], [egg], [gooeybutter, gooeyprotobutter])
var protobatter = new recipe("Proto-Batter", [refinedflour], [egg], [sweetprotobutter, honeyprotobutter])
var cakebatter = new recipe("Cake Batter", [refinedflour], [egg], [sweetbutter])
var writhingrollingbatter = new recipe("Writhing, Rolling Batter", [refinedflour], [larvalcore], [delicatemeringue])
var wailingbatter = new recipe("Wailing Batter", [refinedflour], [larvalcore], [sweetbutter])

var perpetualcake = new recipe("Perpetual Cake", [cakebatter], [anomalousjam], [cream])
var chocolatecake = new recipe("Chocolate Cake", [cakebatter], [bittersweetcocoa])
var esophagealcake = new recipe("Esophageal Cake", [cakebatter], [cactusnectar])
var spicedapplecake = new recipe("Spiced 'Apple' Cake", [cakebatter], [crabapple])
var creambuns = new recipe("Cream Buns", [cakebatter], [cream])
var caramelencrustedcake = new recipe("Caramel-Encrusted Cake", [cakebatter], [crunchycaramel, crunchycaramelAlt])
var everboilingcake = new recipe("Ever-Boiling Cake", [cakebatter], [burningjam], [cream])
var traditionalcake = new recipe("Traditional Cake", [cakebatter], [grahjam, furballjelly], [cream])
var horrifyinggooeydelight = new recipe("Horrifying, Gooey Delight (Cake Batter)", [cakebatter, protobatter], [monstrouscustard])
var horrifyinggooeydelightAlt = new recipe("Horrifying Gooey Delight (Wailing Batter)", [wailingbatter], [monstrouscustard, saltycustard, stellarcustard, viscouscustard])
var brineydelight = new recipe("Briney Delight", [cakebatter], [saltycustard])
var interstellarfancy = new recipe("Interstellar Fancy", [cakebatter], [stellarcustard])
var glitteringhoneycake = new recipe("Glittering Honey Cake", [cakebatter], [synthhoney])
var custardfancy = new recipe("Custard Fancy", [cakebatter], [viscouscustard])
var questionablysweetcake = new recipe("Questionably Sweet Cake", [cakebatter, thicksweetbatter], [gooeybutter, stickyhoney])
var perpetualjamfluffer = new recipe("Perpetual Jam Fluffer", [extrafluffybatter], [anomalousjam], [cream])
var chocolatedream = new recipe("Chocolate Dream", [extrafluffybatter], [bittersweetcocoa])
var softandspikysurprise = new recipe("Soft and Spiky Surprise", [extrafluffybatter], [cactusnectar])
var angelicfruitcake = new recipe("Angelic Fruitcake", [extrafluffybatter], [crabapple])
var extrafluffycreamcake = new recipe("Extra-Fluffy Cream Cake", [extrafluffybatter], [cream])
var fluffycarameldelight = new recipe("Fluffy Caramel Delight", [extrafluffybatter], [crunchycaramel, crunchycaramelAlt])
var burningjamfluffer = new recipe("Burning Jam Fluffer", [extrafluffybatter], [burningjam], [cream])
var jamfluffer = new recipe("Jam Fluffer", [extrafluffybatter], [grahjam, furballjelly], [cream])
var honiedangelcake = new recipe("Honied Angel Cake", [extrafluffybatter], [synthhoney])
var gooeyhoneypuff = new recipe("Gooey Honey Puff", [extrafluffybatter], [stickyhoney])
var softcustardfancy = new recipe("Soft Custard Fancy", [extrafluffybatter], [viscouscustard, stellarcustard, saltycustard])
var anomalousdoughnut = new recipe("Anomalous Doughnut", [lumpendoughnut], [anomalousjam])
var cocoadoughnut = new recipe("Cocoa Doughnut", [lumpendoughnut], [bittersweetcocoa])
var carameldoughnut = new recipe("Caramel Doughnut", [lumpendoughnut], [crunchycaramel, crunchycaramelAlt])
var jamdoughnut = new recipe("Jam Doughnut", [lumpendoughnut], [furballjelly, cactusjelly, grahjam, burningjam])
var gooeyprotodoughnut = new recipe("Gooey ProtoDoughnut", [lumpendoughnut], [gooeyprotobutter])
var proteinousdoughnut = new recipe("Proteinous Doughnut", [lumpendoughnut], [meatychunks, meatychunksAlt])
var monstrousdoughnut = new recipe("Monstrous Doughnut", [lumpendoughnut], [monstrouscustard])
var saltydoughnut = new recipe("Salty Doughnut", [lumpendoughnut], [saltycustard])
var stellarator = new recipe("The Stellarator", [lumpendoughnut], [stellarcustard])
var honeybutterdoughnut = new recipe("Honeybutter Doughnut", [lumpendoughnut], [sweetbutter, sweetprotobutter, honeybutter, honeyprotobutter])
var honeydoughnut = new recipe("Honey Doughnut", [lumpendoughnut], [synthhoney])
var custarddoughnut = new recipe("Custard Doughnut", [lumpendoughnut], [viscouscustard])
var wrigglingdoughnut = new recipe("Wriggling Doughnut", [lumpendoughnut], [wrigglingjam])
var spikeytart = new recipe("Spikey Tart", [piecase], [aloeflesh, cactusnectar])
var cocoatart = new recipe("Cocoa Tart", [piecase], [bittersweetcocoa])
var jamtart = new recipe("Jam Tart", [piecase], [cactusjelly, grahjam])
var wrigglingtart = new recipe("Wriggling Tart", [piecase], [crabapple, wrigglingjam])
var creamytreat = new recipe("Creamy Treat", [piecase], [cream])
var carameltreat = new recipe("Caramel Treat", [piecase], [crunchycaramel, crunchycaramelAlt])
var mysterymeatpie = new recipe("Mystery Meat Pie", [piecase], [diplochunks, meatychunksAlt, meatychunks, meatywings, processedmeat, rawsteak, scalymeat, stridersausage])
var glowingpie = new recipe("Glowing Pie", [piecase], [burningjam, fireberry, sievertbeans, solartillo])
var chewyorganpie = new recipe("Chewy Organ Pie", [piecase], [felineliver, offalsac])
var hauntedpie = new recipe("Haunted Pie", [piecase], [fiendishroe])
var jelliedfurtart = new recipe("Jellied Fur Tart", [piecase], [furballjelly, leopardfruit])
var anomaloustart = new recipe("Anomalous Tart", [piecase], [hexaberry, anomalousjam])
var legsinpastry = new recipe("'Legs-in-Pastry'", [piecase], [legmeat])
var spawningtart = new recipe("The Spawning Tart", [piecase], [monstrouscustard])
var fungaltart = new recipe("Fungal Tart", [piecase], [nontoxicmush])
var fruitypudding = new recipe("Fruity Pudding", [piecase], [pilgrimberry, grahberry])
var protosausagepie = new recipe("Proto-Sausage Pie", [piecase], [protosausage])
var solidifiedgreasepie = new recipe("Solidified Grease Pie", [piecase], [regisgrease, oil, protooil])
var custardtart = new recipe("Custard Tart", [piecase], [saltycustard, viscouscustard])
var fishpie = new recipe("Fish Pie", [piecase], [saltyfingers])
var smokeymeatpie = new recipe("Smokey Meat Pie", [piecase], [smokedmeat])
var highfibrepie = new recipe("High-Fibre Pie", [piecase], [steamedveggies, jadepeas])
var stellarcustardtart = new recipe("Stellar Custard Tart", [piecase], [stellarcustard])
var honeytart = new recipe("Honey Tart", [piecase], [stickyhoney, synthhoney])
var mushedrootpie = new recipe("Mushed Root Pie", [piecase], [sweetroot])
var bakedcheesetart = new recipe("Baked Cheese Tart", [piecase], [cheese, protocheese])
var cheesyvegetablepie = new recipe("Cheesy Vegetable Pie", [piecase], [cheese, protocheese], [aloeflesh, jadepeas, pulpyroots, sievertbeans, solartillo])
var chocolatecuriousity = new recipe("Chocolate Curiousity", [protobatter], [bittersweetcocoa])
var pricklycuriousity = new recipe("Prickly Curiousity (Cactus Jelly)", [protobatter], [cactusjelly], [cream])
var pricklycuriousityAlt = new recipe("Prickly Curiousity (Cactus Nectar)", [protobatter], [cactusnectar])
var applecuriousity = new recipe("'Apple' Curiousity (Crab Apple)", [protobatter], [crabapple])
var applecuriousityAlt = new recipe("'Apple' Curiousity (Wriggling Jam)", [protobatter], [wrigglingjam], [cream])
var creamcuriousity = new recipe("Cream Curiousity", [protobatter], [cream])
var unsolvablejamturnover = new recipe("Unsolvable Jam Turnover", [protobatter], [cream], [anomalousjam])
var startlingfancy = new recipe("Startling Fancy", [protobatter], [cream], [burningjam])
var jamcuriousity = new recipe("Jam Curiousity", [protobatter], [cream], [grahjam, furballjelly])
var caramelcuriousity = new recipe("Caramel Curiousity", [protobatter], [crunchycaramel, crunchycaramelAlt])
var mostcuriouscake = new recipe("Most Curious Cake", [protobatter], [gooeybutter, stickyhoney])
var saltysurprise = new recipe("Salty Surprise", [protobatter], [saltycustard])
var interstellarcuriousity = new recipe("Interstellar Curiousity", [protobatter], [stellarcustard])
var honiedprotocake = new recipe("Honied Proto-Cake", [protobatter], [synthhoney])
var custardcuriousity = new recipe("Custard Curiousity", [protobatter], [viscouscustard])
var gooeychocolatecake = new recipe("Gooey Chocolate Cake", [thicksweetbatter], [bittersweetcocoa])
var honiedthroatsticker = new recipe("Honied Throat Sticker (Cactus Jelly)", [thicksweetbatter], [cactusjelly], [cream])
var honiedthroatstickerAlt = new recipe("Honied Throat Sticker (Cactus Nectar)", [thicksweetbatter], [cactusnectar])
var gooeyfruitsurprise = new recipe("Gooey Fruit Surprise", [thicksweetbatter], [crabapple])
var gooeyfruitsurpriseAlt = new recipe("Gooey Chocolate Cake", [thicksweetbatter], [wrigglingjam], [cream])
var sweetcreamdreams = new recipe("Sweet Cream Dreams", [thicksweetbatter], [cream])
var perpetualhoneycake = new recipe("Perpetual Honeycake", [thicksweetbatter], [cream], [anomalousjam])
var jamoozers = new recipe("Jam Oozers", [thicksweetbatter], [cream], [grahjam, furballjelly])
var gooeycaramelcake = new recipe("Gooey Caramel Cake", [thicksweetbatter], [crunchycaramel, crunchycaramelAlt])
var gooeymouthburner = new recipe("Gooey Mouthburner", [thicksweetbatter], [burningjam], [cream])
var gooeyscreamer = new recipe("Gooey Screamer (Monstrous Custard)", [thicksweetbatter], [monstrouscustard])
var gooeyscreamerAlt = new recipe("Gooey Screamer (Honey/Butter)", [wailingbatter], [gooeybutter, stickyhoney])
var saltlacedhoneycake = new recipe("Salt-Laced Honey Cake", [thicksweetbatter], [saltycustard])
var starbirthdelight = new recipe("Starbirth Delight", [thicksweetbatter], [stellarcustard])
var honeysoakedfancy = new recipe("Honey-Soaked Fancy", [thicksweetbatter], [synthhoney])
var gooeycustardfancy = new recipe("Gooey Custard Fancy", [thicksweetbatter], [viscouscustard])
var cakeofglass = new recipe("Cake of Glass", [wailingbatter], [anomalousjam], [cream])
var hauntedchocolatedreams = new recipe("Haunted Chocolate Dreams", [wailingbatter], [bittersweetcocoa])
var chokingmonstrocitycake = new recipe("Choking Monstrosity Cake (Cactus Nectar)", [wailingbatter], [cactusnectar])
var chokingmonstrocitycakeAlt = new recipe("Choking Monstrosity Cake (Cactus Jelly)", [wailingbatter], [cactusjelly], [cream])
var applecakeoflostsouls = new recipe("'Apple' Cake of Lost Souls (Crab 'Apple')", [wailingbatter], [crabapple])
var applecakeoflostsoulsAlt = new recipe("'Apple' Cake of Lost Souls (Wriggling Jam)", [wailingbatter], [wrigglingjam], [cream])
var cakeofburningdread = new recipe("Cake of Burning Dread", [wailingbatter], [burningjam], [cream])
var appailingjamsponge = new recipe("Appailing Jam Sponge", [wailingbatter], [furballjelly, grahjam], [cream])
var monstroushoneycake = new recipe("Monstrous Honey Cake", [wailingbatter], [synthhoney])
var unboundmonstrocity = new recipe("Unbound Monstrocity", [writhingrollingbatter], [anomalousjam], [cream])
var volatilechocolatefancy = new recipe("Volatile Chocolate Fancy", [writhingrollingbatter], [bittersweetcocoa])
var fluffythroatripper = new recipe("Fluffy Throatripper (Cactus Nectar)", [writhingrollingbatter], [cactusnectar])
var fluffythroatripperAlt = new recipe("Fluffy Throatripper (Cactus Jelly)", [writhingrollingbatter], [cactusjelly], [cream])
var cakeofsin = new recipe("Cake of Sin (Crab 'Apple')", [writhingrollingbatter], [crabapple])
var cakeofsinAlt = new recipe("Cake of Sin (Wriggling Jam)", [writhingrollingbatter], [wrigglingjam], [cream])
var unboundcreamhorn = new recipe("Unbound Cream Horn", [writhingrollingbatter], [cream])
var caramelisednightmare = new recipe("Caramelised Nightmare", [writhingrollingbatter], [crunchycaramel, crunchycaramelAlt])
var burningjamsurprise = new recipe("Burning Jam Surprise", [writhingrollingbatter], [burningjam], [cream])
var writhingjampuff = new recipe("Writhing Jam Puff", [writhingrollingbatter], [furballjelly, grahjam], [cream])
var itchingcreepinghoneysponge = new recipe("Itching, Creeping Honey Sponge", [writhingrollingbatter], [gooeybutter, stickyhoney])
var cakeofthelost = new recipe("Cake of the Lost", [writhingrollingbatter], [monstrouscustard, saltycustard, stellarcustard, viscouscustard])
var torturedhoneycake = new recipe("Tortured Honey Cake", [writhingrollingbatter], [synthhoney])

var recipelist = []
for (var i in window) {
    var thingy = window[i]
    if (thingy instanceof recipe) {
        recipelist.push(thingy)
    }
}

var corelist = []
for (var i in window) {
    var thingy = window[i]
    if (thingy instanceof core) {
        corelist.push(thingy)
    }
}

recipelist.sort((a, b) => (a.name > b.name) ? 1 : -1)
corelist.sort((a, b) => (a.name > b.name) ? 1 : -1)

injectrecipes("layer0s0l0", recipelist)

var shoppinglist = new Set()
var shoppingtext = ''

var shoppingcounts = new Map()

function lockin(id) {
    var buttonpresent = false

    var formid = id.substring(0, 6)
    var nextformid = formid.substring(0, 5) + (parseInt(formid[5], 10) + 1)

    for (var i = (parseInt(formid[5], 10) + 1); i <= 7; i++) {
        document.getElementById('layer' + i).innerHTML = ""
    }

    var form = document.getElementById(formid)
    var nextform = document.getElementById(nextformid)

    var uniques = []

    var datalists = form.getElementsByTagName("datalist")
    nextform.insertAdjacentHTML("afterbegin", '<hr>')

    var recipespresent = false

    for (var i = 0; i < datalists.length; i++) {

        var currentinputid = setCharAt(datalists[i].getAttribute("ID"), 8, 'i')
        var currentinput = document.getElementById(currentinputid)

        var inputunique = true

        for (var j in uniques) {
            if (currentinput.value != uniques[j]) {
                uniques.push(currentinput.value)
            } else {
                inputunique = false
            }
        }

        var inputvalid = false

        for (var j in recipelist) {
            if ((currentinput.value == recipelist[j].name) && (currentinput.value != "None")) {
                inputvalid = true
            }
        }
        for (var j in corelist) {
            if ((currentinput.value == corelist[j].name) && (currentinput.value != "None")) {
                shoppinglist.add(corelist[j])
                if (shoppingcounts.has(currentinput.value)) {
                    shoppingcounts.set(currentinput.value, shoppingcounts.get(currentinput.value) + 1)
                } else { shoppingcounts.set(currentinput.value, 1) }
            }
        }



        if ((inputvalid == true) && (inputunique == true)) {
            recipespresent = true
            nextform.insertAdjacentHTML("beforeend", '<b4>' + currentinput.value + ' ingredients: </b4><br>')
            nextform.insertAdjacentHTML("beforeend", '<input id = "' + nextformid + 's' + i + 'i0" list = "' + nextformid + 's' + i + 'l0"><datalist id = "' + nextformid + 's' + i + 'l0"></datalist></br><input id = "' + nextformid + 's' + i + 'i1" list = "' + nextformid + 's' + i + 'l1"><datalist id = "' + nextformid + 's' + i + 'l1"></datalist></br><input id = "' + nextformid + 's' + i + 'i2" list = "' + nextformid + 's' + i + 'l2"><datalist id = "' + nextformid + 's' + i + 'l2"></datalist></br>')

            var i1data = nextformid + 's' + i + 'l0'
            var i2data = nextformid + 's' + i + 'l1'
            var i3data = nextformid + 's' + i + 'l2'

            var i1input = document.getElementById(nextformid + 's' + i + 'i0')
            var i2input = document.getElementById(nextformid + 's' + i + 'i1')
            var i3input = document.getElementById(nextformid + 's' + i + 'i2')

            defaultstorer = 0

            for (var j in recipelist) {
                if (currentinput.value == recipelist[j].name) {
                    injectrecipes(i1data, recipelist[j].i1)
                    injectrecipes(i2data, recipelist[j].i2)
                    injectrecipes(i3data, recipelist[j].i3)
                    defaultstorer = j
                }
            }
            if (recipelist[defaultstorer].i1.length > 1) {
                i1input.value = "--multiple choice--"
            } else {
                i1input.value = recipelist[defaultstorer].i1[0].name
            }
            if (recipelist[defaultstorer].i2.length > 1) {
                i2input.value = "--multiple choice--"
            } else {
                i2input.value = recipelist[defaultstorer].i2[0].name
            }
            if (recipelist[defaultstorer].i3.length > 1) {
                i3input.value = "--multiple choice--"
            } else {
                i3input.value = recipelist[defaultstorer].i3[0].name
            }
        }
    }
    if (recipespresent == true) {
        nextform.insertAdjacentHTML("beforeend", '<input id = "' + nextformid + 's' + parseInt(i / 3, 10) + 'b" type = "button" value = "Lock In" onclick = "lockin(this.id)"></input>')
        buttonpresent = true
    }

    if (buttonpresent != true) {
        shoppingblock = document.getElementById("coresource")
        for (var ingredient of shoppinglist) {
            shoppingtext += ingredient.name + ' x' + shoppingcounts.get(ingredient.name) + ' - ' + ingredient.origin + '<br>'
        }
        shoppingblock.innerHTML = ''
        shoppingblock.innerHTML = shoppingtext + '<br><input type = button value = "Clear" onclick = "clearshoplist()"></input>'
    }
}
