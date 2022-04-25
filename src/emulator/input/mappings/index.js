import { AkkaArrhMapping } from "./akkaarrh"
import { AngelKidsMapping } from "./angelkds";
import { ArcadeClassicsMapping } from "./arcadecl";
import { ArgusMapping } from "./argusg";
import { AssaultMapping } from "./assault";
import { AztaracMapping } from "./aztarac";
import { BadlandsMapping } from "./badlands"
import { BangMapping } from "./bang";
import { BattleZoneMapping } from "./bzone";
import { BeastBustersMapping } from "./bbusters"
import { BigRunMapping } from "./bigrun";
import { BlackWidowMapping } from "./bwidow";
import { BladesOfSteelMapping } from "./bladestll";
import { BlasterMapping } from "./blaster"
import { BulletMapping } from "./bullet";
import { CabalMapping } from "./cabaluk";
import { CapcomBowlingMapping } from "./capbowl"
import { ChequeredFlagMapping } from "./chqflag";
import { CloakAndDaggerMapping } from "./cloak";
import { ComplexXMapping } from "./complexx";
import { CrazyClimberMapping } from "./cclimber";
import { CrystalCastlesMapping } from "./ccastles";
import { CyberTankMapping } from "./cybertnk";
import { DDayMapping } from "./dday";
import { DemolitionDerbyMapping } from "./demoderb";
import { DiscsOfTronMapping } from "./dotron";
import { DribblingMapping } from "./dribling";
import { DragonGunMapping } from "./dragngun";
import { EmpireStrikesBackMapping } from "./esb";
import { EscapeFromPlanetOfRobotMonstersMapping } from "./eprom"
import { ExterminatorMapping } from "./exterm";
import { FaceoffMapping } from "./faceoff";
import { FiretrapMapping } from "./firetrap";
import { FoodFightMapping } from "./foodf";
import { ForgottenWorldsMapping } from "./forgottn"
import { FrontlineMapping } from './frontlin'
import { GoindolMapping } from "./goindol";
import { GoldenTee3dMapping } from "./gt3d";
import { GrandPrixStarMapping } from "./f1gpstar";
import { GunsmokeMapping } from "./gunsmoke";
import { HiddenCatch3Mapping } from "./hidctch3";
import { HydraMapping } from "./hydra";
import { IkariWarriorsMapping } from "./ikari";
import { Ikari3Mapping } from "./ikari3";
import { IrritatingMazeMapping } from "./irrmaze";
import { JoyfulRoadMapping } from "./joyfulr";
import { KarateChampMapping } from './kchamp'
import { KickMapping } from "./kick";
import { KonamiGtMapping } from "./konamigt";
import { KozmikKroozrMapping } from "./kroozr";
import { KnightmareMapping } from './kngtmare'
import { KrullMapping } from "./krull";
import { LethalEnforcersMapping } from "./lethalen";
import { LostTombMapping } from "./losttomb";
import { LibbleRablleMapping } from "./liblrabl";
import { LordOfGunMapping } from "./lordgun";
import { LunarLanderMapping } from "./llander";
import { MarsMapping } from "./mars"
import { MaxRpmMapping } from "./maxrpm";
import { MillipedeMapping } from "./milliped";
import { MinefieldMapping } from "./minefld";
import { MkMapping } from "./mk";
import { NbaJamMapping } from "./nbajam";
import { OmegaRaceMapping } from "./omegrace";
import { OutrunMapping } from "./outrun";
import { PointBlankMapping } from "./ptblank"
import { PopNBounceMapping } from "./popbounc";
import { PoundForPoundMapping } from "./poundfor"
import { PowerDriftMapping } from "./pdrift";
import { PowerUpBaseballMapping } from "./pubball";
import { PuzzLoop2Mapping } from "./pzloop2";
import { QuantumMapping } from "./quantum";
import { ReactorMapping } from "./reactor";
import { RedBaronMapping } from "./redbaron";
import { RescueMapping } from "./rescue";
import { ReturnOfIshtarMapping } from "./roishtar";
import { ReturnOfTheJediMapping } from "./jedi";
import { RevolutionXMapping } from "./revx";
import { RobotronMapping } from "./robotron";
import { RockClimberMapping } from "./rockclim";
import { SargeMapping } from "./sarge";
import { ScrewLooseMapping } from "./screwloo";
import { ScudHammerMapping } from "./scudhamm";
import { SearchAndRescueMapping } from "./searchar";
import { SinistarMapping } from "./sinistar"
import { Sf2Mapping } from "./sf2";
import { ShuffleshotMapping } from "./shufshot";
import { ShuuzMapping } from "./shuuz";
import { SmashTvMapping } from "./smashtv";
import { SpaceDungeonMapping } from "./sdungeon";
import { SpaceDuelMapping } from "./spacduel";
import { SpeedBallMapping } from "./spdball";
import { SplatMapping } from "./splat";
import { SpyHunterMapping } from "./spyhunt";
import { StarGuardsMapping } from "./stargrds";
import { StarWarsMapping } from "./starwars";
import { SuperHangOnMapping } from "./shangon";
import { TempestMapping } from "./tempest";
import { Terminator2Mapping } from "./term2"
import { ThunderCeptorMapping } from "./tceptor";
import { TinStarMapping } from "./tinstar";
import { TitleFightMapping } from "./titlef";
import { TronMapping } from "./tron";
import { TutankhamMapping } from "./tutankham";
import { TwoTigersMapping } from "./twotiger"
import { VindicatorsMapping } from "./vindictr";
import { Vindicators2Mapping } from "./vindctr2";
import { WaterMatchMapping } from "./wmatch";
import { WackoMapping } from "./wacko";
import { WecLeMans24Mapping } from "./wecleman";
import { WildPilotMapping } from "./wildplt";
import { WildWesternMapping } from "./wwestern";
import { WizWarzMapping } from "./wizwarz";
import { WorldClassBowlingDeluxeMapping } from "./wcbowldx"
import { WorldPkSoccerV2Mapping } from "./wpksocv2";

export function findMapping(emuInput) {
  const { fbneoModule, emulator } = emuInput;

  const primaryName = emulator.getPrimaryName();
  const parentName = emulator.getParentName();

  const isName = (names) => {
    for (let i = 0; i < names.length; i++) {
      const n = names[i];
      if (n === primaryName ||
        (parentName !== null && parentName === n)) {
        return true;
      }
    }
    return false;
  }

  /*  Akka Arrh */
  if (isName(["akkaarrh"])) {
    return new AkkaArrhMapping(emuInput);
  }      
  /* Arcade Classics */
  if (isName(["arcadecl"])) {
    return new ArcadeClassicsMapping(emuInput);
  }      
  /* Argus */
  if (isName(["argusg"])) {
    return new ArgusMapping(emuInput);
  }      
  /* Angel Kids */
  if (isName(["angelkds"])) {
    return new AngelKidsMapping(emuInput);
  }    
  /* Assault */
  if (isName(["assault"])) {
    return new AssaultMapping(emuInput);
  }    
  /* Aztarac */
  if (isName(["aztarac"])) {
    return new AztaracMapping(emuInput);
  }    
  /* Badlands */
  if (isName(["badlands"])) {
    return new BadlandsMapping(emuInput);
  }    
  /* Bang */ 
  if (isName(["bang"])) {
    return new BangMapping(emuInput);
  }    
  /* Battle Zone */
  if (isName(["bzone"])) {
    return new BattleZoneMapping(emuInput);
  }      
  /* Beast Busters */
  if (isName(["bbusters"])) {
    return new BeastBustersMapping(emuInput);
  }      
  /* Big Run, Cisco Heat */
  if (isName(["bigrun", "cischeat"])) {
    return new BigRunMapping(emuInput);
  }        
  /* Black Widow */
  if (isName(["bwidow"])) {
    return new BlackWidowMapping(emuInput);
  }  
  /* Blades of Steel (Trackball) */
  if (isName(["bladestll", "bladestle"])) {
    return new BladesOfSteelMapping(emuInput);
  }    
  /* Blaster */
  if (isName(["blaster"])) {
    return new BlasterMapping(emuInput);
  }      
  /* Bullet */
  if (isName(["bullet"])) {
    return new BulletMapping(emuInput);
  }  
  /* Cabal */
  if (isName(["cabaluk", "cabalus", "cabalus2"])) {
    return new CabalMapping(emuInput);
  }    
  /* Capcom Bowling */
  if (isName(["capbowl", "bowlrama"])) {
    return new CapcomBowlingMapping(emuInput);
  }    
  /* Chequered Flag */
  if (isName(["chqflag"])) {
    return new ChequeredFlagMapping(emuInput);
  }  
  /* Cloak and Dagger */
  if (isName(["cloak"])) {
    return new CloakAndDaggerMapping(emuInput);
  }  
  /* Complex X */
  if (isName(["complexx"])) {
    return new ComplexXMapping(emuInput);
  }  
  /* Crazy Climber */
  if (isName(["cclimber"])) {
    return new CrazyClimberMapping(emuInput);
  }    
  /* Crystal Castles */
  if (isName(["ccastles"])) {
    return new CrystalCastlesMapping(emuInput);
  }    
  /* Cyber Tank */
  if (isName(["cybertnk"])) {
    return new CyberTankMapping(emuInput);
  }    
  /* D-Day */
  if (isName(["dday"])) {
    return new DDayMapping(emuInput);
  }      
  /* Demolition Derby */
  if (isName(["demoderb"])) {
    return new DemolitionDerbyMapping(emuInput);
  }      
  /* Discs of Tron */
  if (isName(["dotron"])) {
    return new DiscsOfTronMapping(emuInput);
  }      
  /* Dribblng */
  if (isName(["dribling"])) {
    return new DribblingMapping(emuInput);    
  }      
  /* Dragon Gun */
  if (isName(["dragngun"])) {
    return new DragonGunMapping(emuInput);    
  }      
  /* Empire Strikes Back */
  if (isName(["esb"])) {
    return new EmpireStrikesBackMapping(emuInput);    
  }      
  /* Escape from the Planet of the Robot Monsters */
  if (isName(["eprom"])) {
    return new EscapeFromPlanetOfRobotMonstersMapping(emuInput);    
  }      
  /* Exterminator */
  if (isName(["exterm"])) {
    return new ExterminatorMapping(emuInput);    
  }      
  /* Faceoff */
  if (isName(["faceoff"])) {
    return new FaceoffMapping(emuInput);
  }    
  /* Firetrap */
  if (isName(["firetrap"])) {
    return new FiretrapMapping(emuInput);
  }    
  /* Food Fight */
  if (isName(["foodf"])) {
    return new FoodFightMapping(emuInput);
  }    
  /* Forgotten Worlds */
  if (isName(["forgottn"])) {
    return new ForgottenWorldsMapping(emuInput);
  }    
  /* Frontline */
  if (isName(["frontlin"])) {
    return new FrontlineMapping(emuInput);
  }    
  /* Goindol */
  if (isName(["goindol"])) {
    return new GoindolMapping(emuInput);
  }   
  /* Gold Tee 3d */ 
  if (isName(["gt3d", "gt97", "gt98", "gt99", "gt2k", "gtclassc"])) {
    return new GoldenTee3dMapping(emuInput);
  }     
  /* Grand Prix Star */
  if (isName(["f1gpstar"])) {
    return new GrandPrixStarMapping(emuInput);
  }      
  /* Gunsmoke */
  if (isName(["gunsmoke"])) {
    return new GunsmokeMapping(emuInput);
  }    
  /* Hidden Catch 3 */
  if (isName(["hidctch3"])) {
    return new HiddenCatch3Mapping(emuInput);
  }      
  /* Hydra */
  if (isName(["hydra"])) {
    return new HydraMapping(emuInput);
  }    
  /* Ikari Warriors */
  if (isName(["ikari"])) {
    return new IkariWarriorsMapping(emuInput);
  }    
  /* Ikari 3 */
  if (isName(["ikari3"])) {
    return new Ikari3Mapping(emuInput);
  }      
  /* Irritating Maze */
  if (isName(["irrmaze"])) {
    return new IrritatingMazeMapping(emuInput);
  }    
  /* Joyful Road */
  if (isName(["joyfulr"])) {
    return new JoyfulRoadMapping(emuInput);
  }    
  /* Karate Champ */
  if (isName(["kchamp"])) {
    return new KarateChampMapping(emuInput);
  }    
  /* Kick (dpoker? unable to find rom)*/
  if (isName(["kick", "dpoker"])) {
    return new KickMapping(emuInput);
  }    
  /* Knightmare */
  if (isName(["kngtmare"])) {
    return new KnightmareMapping(emuInput);
  }    
  /* Konami GT */
  if (isName(["konamigt"])) {
    return new KonamiGtMapping(emuInput);
  }    
  /* Kozmik Kroozr */
  if (isName(["kroozr"])) {
    return new KozmikKroozrMapping(emuInput);
  }    
  /* Krull */
  if (isName(["krull"])) {
    return new KrullMapping(emuInput);
  }    
  /* Lethal Enforcers */
  if (isName(["lethalen"])) {
    return new LethalEnforcersMapping(emuInput);
  }      
  /* Libble Rablle */
  if (isName(["liblrabl"])) {
    return new LibbleRablleMapping(emuInput);
  }      
  /* Lord of Gun */
  if (isName(["lordgun"])) {
    return new LordOfGunMapping(emuInput);
  }      
  /* Lost Tomb */
  if (isName(["losttomb"])) {
    return new LostTombMapping(emuInput);
  }      
  /* Lunar Lander */
  if (isName(["llander"])) {
    return new LunarLanderMapping(emuInput);
  }      
  /* Mortal Kombat */
  if (isName(["mk", "mk2", "mk3"])) {
    return new MkMapping(emuInput);
  }  
  /* Mars */
  if (isName(["mars"])) {
    return new MarsMapping(emuInput);
  }  
  /* Max Rpm */
  if (isName(["maxrpm"])) {
    return new MaxRpmMapping(emuInput);
  }  
  /* Centipede, Millipede */
  if (isName(["centiped", "milliped"])) {
    return new MillipedeMapping(emuInput);
  }
  /* Minefield */
  if (isName(["minefld"])) {
    return new MinefieldMapping(emuInput);
  }
  /* Nba Jam */
  if (isName(["nbajam", "nbahangt", "nbajamte", "nbamht"])) {
    return new NbaJamMapping(emuInput);
  }
  /* Omega Race */
  if (isName(["omegrace"])) {
    return new OmegaRaceMapping(emuInput);
  }
  /* Outrun */
  if (isName(["outrun"])) {
    return new OutrunMapping(emuInput);
  }
  /* Point Blank */    
  if (isName(["ptblank"])) {
    return new PointBlankMapping(emuInput);
  }
  /* Pop N Bounce */
  if (isName(["popbounc"])) {
    return new PopNBounceMapping(emuInput);
  }  
  /* Pop N Bounce */
  if (isName(["poundfor"])) {
    return new PoundForPoundMapping(emuInput);
  }    
  /* Power Drift */
  if (isName(["pdrift"])) {
    return new PowerDriftMapping(emuInput);
  }
  /* Power Up Baseball */  
  if (isName(["pubball"])) {
    return new PowerUpBaseballMapping(emuInput);
  }
  /* Puzz Loop 2 */
  if (isName(["pzloop2"])) {
    return new PuzzLoop2Mapping(emuInput);
  }  
  /* Quantum */
  if (isName(["quantum"])) {
    return new QuantumMapping(emuInput);    
  }
  /* Reactor */  
  if (isName(["reactor"])) {
    return new ReactorMapping(emuInput);    
  }
  /* Rescue */
  if (isName(["rescue"])) {
    return new RescueMapping(emuInput);    
  }
  /* Red Baron */
  if (isName(["redbaron"])) {
    return new RedBaronMapping(emuInput);
  }
  /* Return of Ishtar */
  if (isName(["roishtar"])) {
    return new ReturnOfIshtarMapping(emuInput);
  }
  /* Return of The Jedi */
  if (isName(["jedi"])) {
    return new ReturnOfTheJediMapping(emuInput);
  }
  /* RevolutionX */
  if (isName(["revx"])) {
    return new RevolutionXMapping(emuInput);
  }
  /* Robotron */
  if (isName(["robotron"])) {
    return new RobotronMapping(emuInput);
  }
  /* Rock Climber */
  if (isName(["rockclim"])) {
    return new RockClimberMapping(emuInput);
  }  
  /* Sarge */
  if (isName(["sarge"])) {
    return new SargeMapping(emuInput);
  }  
  /* Screw Loose */
  if (isName(["screwloo"])) {
    return new ScrewLooseMapping(emuInput);
  }    
  /* Scud Hammer */
  if (isName(["scudhamm"])) {
    return new ScudHammerMapping(emuInput);
  }  
  /* Search and Rescue */
  if (isName(["searchar"])) {
    return new SearchAndRescueMapping(emuInput);
  }    
  /* Shuffleshot */  
  if (isName(["shufshot"])) {
    return new ShuffleshotMapping(emuInput);
  }      
  /* Sinistar */
  if (isName(["sinistar"])) {
    return new SinistarMapping(emuInput);
  }      
  /* Smash T.V., Total Carnage */
  if (isName(["shuuz"])) {
    return new ShuuzMapping(emuInput);
  }
  /* Smash T.V., Total Carnage */
  if (isName(["smashtv", "totcarn"])) {
    return new SmashTvMapping(emuInput);
  }
  /* Space Duel */
  if (isName(["spacduel"])) {
    return new SpaceDuelMapping(emuInput);
  }    
  /* Space Dungeon */
  if (isName(["sdungeon"])) {
    return new SpaceDungeonMapping(emuInput);
  }    
  /* Speedball */
  if (isName(["spdball"])) {
    return new SpeedBallMapping(emuInput);
  }      
  /* Splat! */
  if (isName(["splat"])) {
    return new SplatMapping(emuInput);
  }  
  /* Spy Hunter */
  if (isName(["spyhunt"])) {
    return new SpyHunterMapping(emuInput);
  }  
  /* Star Guards */
  if (isName(["stargrds"])) {
    return new StarGuardsMapping(emuInput);
  }  
  /* Star Wars */
  if (isName(["starwars"])) {
    return new StarWarsMapping(emuInput);
  }    
  /* Street Fighter */
  if (fbneoModule._isStreetFighterLayout()) {
    return new Sf2Mapping(emuInput);
  }
  /* Super Hang-On */
  if (isName(["shangon"])) {
    return new SuperHangOnMapping(emuInput);
  }    
  /* Tempest */
  if (isName(["tempest"])) {
    return new TempestMapping(emuInput);
  }  
  /* Terminator 2 */  
  if (isName(["term2"])) {
    return new Terminator2Mapping(emuInput);
  }  
  /* The Tin Star */
  if (isName(["tinstar"])) {
    return new TinStarMapping(emuInput);
  }  
  /* Thunder Ceptor */
  if (isName(["tceptor"])) {
    return new ThunderCeptorMapping(emuInput);
  }    
  /* Title Fight */
  if (isName(["titlef"])) {
    return new TitleFightMapping(emuInput);
  }  
  /* Tron */
  if (isName(["tron"])) {
    return new TronMapping(emuInput);
  }  
  /* Tutankham */
  if (isName(["tutankhm"])) {
    return new TutankhamMapping(emuInput);
  }  
  /* Two Tigers */
  if (isName(["twotiger"])) {
    return new TwoTigersMapping(emuInput);
  }  
  /* Vindicators */
  if (isName(["vindictr"])) {
    return new VindicatorsMapping(emuInput);
  }  
  /* Vindicators 2 */
  if (isName(["vindctr2"])) {
    return new Vindicators2Mapping(emuInput);
  }  
  /* Wacko */
  if (isName(["wacko"])) {
    return new WackoMapping(emuInput);
  }  
  /* Water Match */
  if (isName(["wmatch"])) {
    return new WaterMatchMapping(emuInput);
  }  
  /* WEC Le Mans 24 (and Hot Chase) */
  if (isName(["wecleman", "hotchase"])) {
    return new WecLeMans24Mapping(emuInput);
  }    
  /* Wild Pilot */
  if (isName(["wildplt"])) {
    return new WildPilotMapping(emuInput);
  }    
  /* Wild Western */
  if (isName(["wwestern"])) {
    return new WildWesternMapping(emuInput);
  }  
  /* Wiz Warz */
  if (isName(["wizwarz"])) {
    return new WizWarzMapping(emuInput);
  }  
  /* World Class Bowling Deluxe */  
  if (isName(["wcbowl", "wcbowldx"])) {
    return new WorldClassBowlingDeluxeMapping(emuInput);
  }  
  if (isName(["wpksocv2"])) {
    return new WorldPkSoccerV2Mapping(emuInput);
  }  

  return null;
}

//
// Twin Stick
//

// * Angel Kids (Japan)
// * Assault
// * Battle Zone (set 1)
// * Black Widow
// * Bullet (FD1094 317-0041)
// * Cloak & Dagger (rev 5)
// * Complex X
// * Crazy Climber (US)
// * Crazy Climber 2 (Japan)
// - Draco
// * Dribbling
// * Face Off (Japan)
// * Fire Trap (US)
// * Front Line
// - Hat Trick
// - Hyperdrive
// * Ikari Warriors
// * Ikari 3
// - Indoor Soccer
// - Inferno
// * Joyful Road (Japan)
// * Karate Champ (US)
// * Knightmare (prototype)
// * Krull
// * Libble Rabble
// * Lost Tomb (easy)
// * Mars
// * Minefield
// - Off the Wall (Sente)
// - QB-3 (prototype)
// * Rescue
// - Rescue Raider
// * Robotron (Solid Blue label)
// * Rock Climber
// * Sarge
// * Screw Loose (prototype)
// - Sente Diagnostic Cartridge
// - Sheriff
// * Smash T.V. (rev 8.00)
// - Snake Pit
// * Space Dungeon
// * Splat!
// * Star Guards
// - Stompin'
// - Tank 8 (set 1)
// * The Return of Ishtar
// * The Tin Star (set 1)
// * Title Fight (World)
// - Toggle (prototype)
// * Total Carnage (rev LA1 03/10/92)
// - Trivial Pursuit (All Star Sports Edition)
// - Trivial Pursuit (Baby Boomer Edition)
// - Trivial Pursuit (Genus I) (set 1)
// - Trivial Pursuit (Genus I) (set 2)
// - Trivial Pursuit (Genus II)
// - Trivial Pursuit (Spanish Edition)
// - Trivial Pursuit (Young Players Edition)
// - Ultra Tank
// * Vindicators (rev 5)
// * Vindicators Part II (rev 3)
// * Water Match (315-5064)
// * Wild Western (set 1)

//
// Analog
//

// SDI - Strategic Defense Initiative (Europe, System 16A, FD1089B 317-0027)

// * Akka Arrh
// * Arcade Classics
// * Argus
// * Aztarac
// * Badlands
// * Bang
// * Beast Busters (J and JA)
// * Big Run
// * Blades of Steel (Trackball)
// * Blaster
// * Bowl-o-Rama
// * Cabal (UK, US, US2)
// * Capcom Bowling
// * Centipede
// * Checkered Flag
// * Cisco Heat
// * Crystal Castles
// * Cyber Tank
// * D-Day
// * Demolition Derby
// * Discs of Tron
// * Dragon Gun
// * Empire Strikes Back
// * Escape from the Planet of the Robot Monsters
// * Exterminator
// * Food Fight
// * Forgotten Worlds
// * Goindol
// * Golden Tee 3d
// * Grand Prix Star
// * Hidden Catch 3
// * Hydra
// * Irritating Maze 
// * Kick
// * Kozmik Kroozr
// * Konami GT
// * Lethal Enforcers
// * Lord of Gun
// * Lunar Lander
// * Max RPM
// * Millipede
// * Omega Race
// * Outrun
// * Point Blank
// * Pop 'n Bounce (Must enable paddle w/ soft dip)
// * Pound for Pound
// * Power Drift
// * Power Up Baseball
// * Puzz Loop 2
// * Quantum
// * Reactor
// * Red Baron
// * Return of the Jedi
// * RevolutionX
// * Scud Hammer
// * Search and Rescue
// * Shuuz
// * Shuuz 2
// * Shuffleshot
// * Sinistar
// * Speed Ball - Contest at Neonworld
// * Spy Hunter
// * Star Wars
// * Super Hang-On
// * Tempest
// * Terminator 2
// * Thunder Ceptor
// * Tron
// * Two Tigers
// * Wacko
// * WEC Le Mans 24 (and Hot Chase)
// * Wild Pilot
// * Wiz Warz
// * World Class Bowling Deluxe
// * World PK Soccer V2

//
// Misc
//

// * Space Duel

//
// DrvFakeInput
//

// Mad Planets (mplanets) DrvFakeInput