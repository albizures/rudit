import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опротестовать: PerfectVerb = {
  name: Word('опротестовать', 10),
  singular1stPerson: Word('опротестую', 8),
  singular2ndPerson: Word('опротестуешь', 8),
  singular3rdPerson: Word('опротестует', 8),
  plural1stPerson: Word('опротестуем', 8),
  plural2ndPerson: Word('опротестуете', 8),
  plural3rdPerson: Word('опротестуют', 8),
  masculinePast: Word('опротестовал', 10),
  femininePast: Word('опротестовала', 10),
  neuterPast: Word('опротестовало', 10),
  pluralPast: Word('опротестовали', 10),
  imperativeInformal: Word('опротестуй', 8),
  imperativeFormal: Word('опротестуйте', 8),
  imperfect: [],
};

perfectVerbs.set(опротестовать.name.text, опротестовать);

export { опротестовать };