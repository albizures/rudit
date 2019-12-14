import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрапортовать: PerfectVerb = {
  name: Word('отрапортовать', 10),
  singular1stPerson: Word('отрапортую', 8),
  singular2ndPerson: Word('отрапортуешь', 8),
  singular3rdPerson: Word('отрапортует', 8),
  plural1stPerson: Word('отрапортуем', 8),
  plural2ndPerson: Word('отрапортуете', 8),
  plural3rdPerson: Word('отрапортуют', 8),
  masculinePast: Word('отрапортовал', 10),
  femininePast: Word('отрапортовала', 10),
  neuterPast: Word('отрапортовало', 10),
  pluralPast: Word('отрапортовали', 10),
  imperativeInformal: Word('отрапортуй', 8),
  imperativeFormal: Word('отрапортуйте', 8),
  imperfect: [],
};

perfectVerbs.set(отрапортовать.name.text, отрапортовать);

export { отрапортовать };