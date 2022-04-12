import { AngelKidsMapping } from "./angelkds";
import { AssaultMapping } from "./assault";
import { BattleZoneMapping } from "./bzone";
import { BlackWidowMapping } from "./bwidow";
import { BulletMapping } from "./bullet";
import { CloakAndDaggerMapping } from "./cloak";
import { ComplexXMapping } from "./complexx";
import { CrazyClimberMapping } from "./cclimber";
import { DribblingMapping } from "./dribling";
import { FaceoffMapping } from "./faceoff";
import { FiretrapMapping } from "./firetrap";
import { FrontlineMapping } from './frontlin'
import { GunsmokeMapping } from "./gunsmoke";
import { JoyfulRoadMapping } from "./joyfulr";
import { KarateChampMapping } from './kchamp'
import { KnightmareMapping } from './kngtmare'
import { KrullMapping } from "./krull";
import { LostTombMapping } from "./losttomb";
import { LibbleRablleMapping } from "./liblrabl";
import { MarsMapping } from "./mars"
import { MinefieldMapping } from "./minefld";
import { MkMapping } from "./mk";
import { NbaJamMapping } from "./nbajam";
import { RescueMapping } from "./rescue";
import { ReturnOfIshtarMapping } from "./roishtar";
import { RobotronMapping } from "./robotron";
import { RockClimberMapping } from "./rockclim";
import { SargeMapping } from "./sarge";
import { ScrewLooseMapping } from "./screwloo";
import { Sf2Mapping } from "./sf2";
import { SmashTvMapping } from "./smashtv";
import { SpaceDungeonMapping } from "./sdungeon";
import { SplatMapping } from "./splat";
import { StarGuardsMapping } from "./stargrds";
import { TinStarMapping } from "./tinstar";
import { TitleFightMapping } from "./titlef";
import { TutankhamMapping } from "./tutankham";
import { VindicatorsMapping } from "./vindictr";
import { Vindicators2Mapping } from "./vindctr2";
import { WaterMatchMapping } from "./wmatch";
import { WackoMapping } from "./wacko";
import { WildWesternMapping } from "./wwestern";

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

  /* Angel Kids */
  if (isName(["angelkds"])) {
    return new AngelKidsMapping(emuInput);
  }    
  /* Assault */
  if (isName(["assault"])) {
    return new AssaultMapping(emuInput);
  }    
  /* Battle Zone */
  if (isName(["bzone"])) {
    return new BattleZoneMapping(emuInput);
  }      
  /* Black Widow */
  if (isName(["bwidow"])) {
    return new BlackWidowMapping(emuInput);
  }  
  /* Bullet */
  if (isName(["bullet"])) {
    return new BulletMapping(emuInput);
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
  /* Dribblng */
  if (isName(["dribling"])) {
    return new DribblingMapping(emuInput);
  }      
  /* Faceoff */
  if (isName(["faceoff"])) {
    return new FaceoffMapping(emuInput);
  }    
  /* Firetrap */
  if (isName(["firetrap"])) {
    return new FiretrapMapping(emuInput);
  }    
  /* Frontline */
  if (isName(["frontlin"])) {
    return new FrontlineMapping(emuInput);
  }    
  /* Gunsmoke */
  if (isName(["gunsmoke"])) {
    return new GunsmokeMapping(emuInput);
  }    
  /* Joyful Road */
  if (isName(["joyfulr"])) {
    return new JoyfulRoadMapping(emuInput);
  }    
  /* Karate Champ */
  if (isName(["kchamp"])) {
    return new KarateChampMapping(emuInput);
  }    
  /* Knightmare */
  if (isName(["kngtmare"])) {
    return new KnightmareMapping(emuInput);
  }    
  /* Krull */
  if (isName(["krull"])) {
    return new KrullMapping(emuInput);
  }    
  /* Libble Rablle */
  if (isName(["liblrabl"])) {
    return new LibbleRablleMapping(emuInput);
  }      
  /* Lost Tomb */
  if (isName(["losttomb"])) {
    return new LostTombMapping(emuInput);
  }      
  /* Mortal Kombat */
  if (isName(["mk", "mk2", "mk3"])) {
    return new MkMapping(emuInput);
  }  
  /* Mars */
  if (isName(["mars"])) {
    return new MarsMapping(emuInput);
  }  
  /* Minefield */
  if (isName(["minefld"])) {
    return new MinefieldMapping(emuInput);
  }
  /* Nba Jam */
  if (isName(["nbajam", "nbahangt", "nbajamte", "nbamht"])) {
    return new NbaJamMapping(emuInput);
  }
  /* Rescue */
  if (isName(["rescue"])) {
    return new RescueMapping(emuInput);
  }
  /* Return of Ishtar */
  if (isName(["roishtar"])) {
    return new ReturnOfIshtarMapping(emuInput);
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
  /* Smash T.V., Total Carnage */
  if (isName(["smashtv", "totcarn"])) {
    return new SmashTvMapping(emuInput);
  }
  /* Space Dungeon */
  if (isName(["sdungeon"])) {
    return new SpaceDungeonMapping(emuInput);
  }  
  /* Splat! */
  if (isName(["splat"])) {
    return new SplatMapping(emuInput);
  }  
  /* Star Guards */
  if (isName(["stargrds"])) {
    return new StarGuardsMapping(emuInput);
  }    
  /* Street Fighter */
  if (fbneoModule._isStreetFighterLayout()) {
    return new Sf2Mapping(emuInput);
  }
  /* The Tin Star */
  if (isName(["tinstar"])) {
    return new TinStarMapping(emuInput);
  }  
  /* Title Fight */
  if (isName(["titlef"])) {
    return new TitleFightMapping(emuInput);
  }  
  /* Tutankham */
  if (isName(["tutankhm"])) {
    return new TutankhamMapping(emuInput);
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
  /* Wild Western */
  if (isName(["wwestern"])) {
    return new WildWesternMapping(emuInput);
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
// The Tin Star (set 1)
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

// Wacko
// SDI - Strategic Defense Initiative (Europe, System 16A, FD1089B 317-0027)