import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брошюровать: PerfectVerb = {
  name: Word('брошюровать', 8),
  singular1stPerson: Word('брошюрую', 6),
  singular2ndPerson: Word('брошюруешь', 6),
  singular3rdPerson: Word('брошюрует', 6),
  plural1stPerson: Word('брошюруем', 6),
  plural2ndPerson: Word('брошюруете', 6),
  plural3rdPerson: Word('брошюруют', 6),
  masculinePast: Word('брошюровал', 8),
  femininePast: Word('брошюровала', 8),
  neuterPast: Word('брошюровало', 8),
  pluralPast: Word('брошюровали', 8),
  imperativeInformal: Word('брошюруй', 6),
  imperativeFormal: Word('брошюруйте', 6),
  imperfect: [],
};

perfectVerbs.set(брошюровать.name.text, брошюровать);

export { брошюровать };