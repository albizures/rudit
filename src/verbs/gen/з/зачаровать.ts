import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачаровать: PerfectVerb = {
  name: Word('зачаровать', 7),
  singular1stPerson: Word('зачарую', 5),
  singular2ndPerson: Word('зачаруешь', 5),
  singular3rdPerson: Word('зачарует', 5),
  plural1stPerson: Word('зачаруем', 5),
  plural2ndPerson: Word('зачаруете', 5),
  plural3rdPerson: Word('зачаруют', 5),
  masculinePast: Word('зачаровал', 7),
  femininePast: Word('зачаровала', 7),
  neuterPast: Word('зачаровало', 7),
  pluralPast: Word('зачаровали', 7),
  imperativeInformal: Word('зачаруй', 5),
  imperativeFormal: Word('зачаруйте', 5),
  imperfect: [],
};

perfectVerbs.set(зачаровать.name.text, зачаровать);

export { зачаровать };