import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замуровать: PerfectVerb = {
  name: Word('замуровать', 7),
  singular1stPerson: Word('замурую', 5),
  singular2ndPerson: Word('замуруешь', 5),
  singular3rdPerson: Word('замурует', 5),
  plural1stPerson: Word('замуруем', 5),
  plural2ndPerson: Word('замуруете', 5),
  plural3rdPerson: Word('замуруют', 5),
  masculinePast: Word('замуровал', 7),
  femininePast: Word('замуровала', 7),
  neuterPast: Word('замуровало', 7),
  pluralPast: Word('замуровали', 7),
  imperativeInformal: Word('замуруй', 5),
  imperativeFormal: Word('замуруйте', 5),
  imperfect: [],
};

perfectVerbs.set(замуровать.name.text, замуровать);

export { замуровать };