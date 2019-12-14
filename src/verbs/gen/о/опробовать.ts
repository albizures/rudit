import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опробовать: PerfectVerb = {
  name: Word('опробовать', 3),
  singular1stPerson: Word('опробую', 3),
  singular2ndPerson: Word('опробуешь', 3),
  singular3rdPerson: Word('опробует', 3),
  plural1stPerson: Word('опробуем', 3),
  plural2ndPerson: Word('опробуете', 3),
  plural3rdPerson: Word('опробуют', 3),
  masculinePast: Word('опробовал', 3),
  femininePast: Word('опробовала', 3),
  neuterPast: Word('опробовало', 3),
  pluralPast: Word('опробовали', 3),
  imperativeInformal: Word('опробуй', 3),
  imperativeFormal: Word('опробуйте', 3),
  imperfect: [],
};

perfectVerbs.set(опробовать.name.text, опробовать);

export { опробовать };