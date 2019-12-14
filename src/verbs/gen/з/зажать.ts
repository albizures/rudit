import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажать: PerfectVerb = {
  name: Word('зажать', 3),
  singular1stPerson: Word('зажму', 4),
  singular2ndPerson: Word('зажмёшь', 1),
  singular3rdPerson: Word('зажмёт', 1),
  plural1stPerson: Word('зажмём', 1),
  plural2ndPerson: Word('зажмёте', 1),
  plural3rdPerson: Word('зажмут', 4),
  masculinePast: Word('зажал', 3),
  femininePast: Word('зажала', 3),
  neuterPast: Word('зажало', 3),
  pluralPast: Word('зажали', 3),
  imperativeInformal: Word('зажми', 4),
  imperativeFormal: Word('зажмите', 4),
  imperfect: [],
};

perfectVerbs.set(зажать.name.text, зажать);

export { зажать };