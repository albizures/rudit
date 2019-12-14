import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опломбировать: PerfectVerb = {
  name: Word('опломбировать', 10),
  singular1stPerson: Word('опломбирую', 8),
  singular2ndPerson: Word('опломбируешь', 8),
  singular3rdPerson: Word('опломбирует', 8),
  plural1stPerson: Word('опломбируем', 8),
  plural2ndPerson: Word('опломбируете', 8),
  plural3rdPerson: Word('опломбируют', 8),
  masculinePast: Word('опломбировал', 10),
  femininePast: Word('опломбировала', 10),
  neuterPast: Word('опломбировало', 10),
  pluralPast: Word('опломбировали', 10),
  imperativeInformal: Word('опломбируй', 8),
  imperativeFormal: Word('опломбируйте', 8),
  imperfect: [],
};

perfectVerbs.set(опломбировать.name.text, опломбировать);

export { опломбировать };