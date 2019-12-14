import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посчитать: PerfectVerb = {
  name: Word('посчитать', 6),
  singular1stPerson: Word('посчитаю', 6),
  singular2ndPerson: Word('посчитаешь', 6),
  singular3rdPerson: Word('посчитает', 6),
  plural1stPerson: Word('посчитаем', 6),
  plural2ndPerson: Word('посчитаете', 6),
  plural3rdPerson: Word('посчитают', 6),
  masculinePast: Word('посчитал', 6),
  femininePast: Word('посчитала', 6),
  neuterPast: Word('посчитало', 6),
  pluralPast: Word('посчитали', 6),
  imperativeInformal: Word('посчитай', 6),
  imperativeFormal: Word('посчитайте', 6),
  imperfect: ['считать'],
};

perfectVerbs.set(посчитать.name.text, посчитать);

export { посчитать };