import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const веровать: PerfectVerb = {
  name: Word('веровать', 1),
  singular1stPerson: Word('верую', 1),
  singular2ndPerson: Word('веруешь', 1),
  singular3rdPerson: Word('верует', 1),
  plural1stPerson: Word('веруем', 1),
  plural2ndPerson: Word('веруете', 1),
  plural3rdPerson: Word('веруют', 1),
  masculinePast: Word('веровал', 1),
  femininePast: Word('веровала', 1),
  neuterPast: Word('веровало', 1),
  pluralPast: Word('веровали', 1),
  imperativeInformal: Word('веруй', 1),
  imperativeFormal: Word('веруйте', 1),
  imperfect: [],
};

perfectVerbs.set(веровать.name.text, веровать);

export { веровать };