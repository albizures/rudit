import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опаливаться: PerfectVerb = {
  name: Word('опаливаться', 2),
  singular1stPerson: Word('опаливаюсь', 2),
  singular2ndPerson: Word('опаливаешься', 2),
  singular3rdPerson: Word('опаливается', 2),
  plural1stPerson: Word('опаливаемся', 2),
  plural2ndPerson: Word('опаливаетесь', 2),
  plural3rdPerson: Word('опаливаются', 2),
  masculinePast: Word('опаливался', 2),
  femininePast: Word('опаливалась', 2),
  neuterPast: Word('опаливалось', 2),
  pluralPast: Word('опаливались', 2),
  imperativeInformal: Word('опаливайся', 2),
  imperativeFormal: Word('опаливайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(опаливаться.name.text, опаливаться);

export { опаливаться };