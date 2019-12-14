import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const калибровать: PerfectVerb = {
  name: Word('калибровать', 8),
  singular1stPerson: Word('калибрую', 6),
  singular2ndPerson: Word('калибруешь', 6),
  singular3rdPerson: Word('калибрует', 6),
  plural1stPerson: Word('калибруем', 6),
  plural2ndPerson: Word('калибруете', 6),
  plural3rdPerson: Word('калибруют', 6),
  masculinePast: Word('калибровал', 8),
  femininePast: Word('калибровала', 8),
  neuterPast: Word('калибровало', 8),
  pluralPast: Word('калибровали', 8),
  imperativeInformal: Word('калибруй', 6),
  imperativeFormal: Word('калибруйте', 6),
  imperfect: [],
};

perfectVerbs.set(калибровать.name.text, калибровать);

export { калибровать };