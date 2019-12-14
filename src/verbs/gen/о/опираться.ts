import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опираться: PerfectVerb = {
  name: Word('опираться', 4),
  singular1stPerson: Word('опираюсь', 4),
  singular2ndPerson: Word('опираешься', 4),
  singular3rdPerson: Word('опирается', 4),
  plural1stPerson: Word('опираемся', 4),
  plural2ndPerson: Word('опираетесь', 4),
  plural3rdPerson: Word('опираются', 4),
  masculinePast: Word('опирался', 4),
  femininePast: Word('опиралась', 4),
  neuterPast: Word('опиралось', 4),
  pluralPast: Word('опирались', 4),
  imperativeInformal: Word('опирайся', 4),
  imperativeFormal: Word('опирайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(опираться.name.text, опираться);

export { опираться };