import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слать: PerfectVerb = {
  name: Word('слать', 2),
  singular1stPerson: Word('шлю', 2),
  singular2ndPerson: Word('шлёшь', 2),
  singular3rdPerson: Word('шлёт', 2),
  plural1stPerson: Word('шлём', 2),
  plural2ndPerson: Word('шлёте', 4),
  plural3rdPerson: Word('шлют', 2),
  masculinePast: Word('слал', 2),
  femininePast: Word('слала', 2),
  neuterPast: Word('слало', 2),
  pluralPast: Word('слали', 2),
  imperativeInformal: Word('шли', 2),
  imperativeFormal: Word('шлите', 2),
  imperfect: ['послать'],
};

perfectVerbs.set(слать.name.text, слать);

export { слать };