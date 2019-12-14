import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опирать: PerfectVerb = {
  name: Word('опирать', 4),
  singular1stPerson: Word('опираю', 4),
  singular2ndPerson: Word('опираешь', 4),
  singular3rdPerson: Word('опирает', 4),
  plural1stPerson: Word('опираем', 4),
  plural2ndPerson: Word('опираете', 4),
  plural3rdPerson: Word('опирают', 4),
  masculinePast: Word('опирал', 4),
  femininePast: Word('опирала', 4),
  neuterPast: Word('опирало', 4),
  pluralPast: Word('опирали', 4),
  imperativeInformal: Word('опирай', 4),
  imperativeFormal: Word('опирайте', 4),
  imperfect: [],
};

perfectVerbs.set(опирать.name.text, опирать);

export { опирать };