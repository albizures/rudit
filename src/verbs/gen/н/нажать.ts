import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажать: PerfectVerb = {
  name: Word('нажать', 3),
  singular1stPerson: Word('нажму', 4),
  singular2ndPerson: Word('нажмёшь', 4),
  singular3rdPerson: Word('нажмёт', 4),
  plural1stPerson: Word('нажмём', 4),
  plural2ndPerson: Word('нажмёте', 4),
  plural3rdPerson: Word('нажмут', 4),
  masculinePast: Word('нажал', 3),
  femininePast: Word('нажала', 3),
  neuterPast: Word('нажало', 3),
  pluralPast: Word('нажали', 3),
  imperativeInformal: Word('нажми', 4),
  imperativeFormal: Word('нажмите', 4),
  imperfect: ['нажимать'],
};

perfectVerbs.set(нажать.name.text, нажать);

export { нажать };