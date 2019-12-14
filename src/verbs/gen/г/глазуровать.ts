import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глазуровать: PerfectVerb = {
  name: Word('глазуровать', 8),
  singular1stPerson: Word('глазурую', 6),
  singular2ndPerson: Word('глазуруешь', 6),
  singular3rdPerson: Word('глазурует', 6),
  plural1stPerson: Word('глазуруем', 6),
  plural2ndPerson: Word('глазуруете', 6),
  plural3rdPerson: Word('глазуруют', 6),
  masculinePast: Word('глазуровал', 8),
  femininePast: Word('глазуровала', 8),
  neuterPast: Word('глазуровало', 8),
  pluralPast: Word('глазуровали', 8),
  imperativeInformal: Word('глазуруй', 6),
  imperativeFormal: Word('глазуруйте', 6),
  imperfect: [],
};

perfectVerbs.set(глазуровать.name.text, глазуровать);

export { глазуровать };