import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полистать: PerfectVerb = {
  name: Word('полистать', 6),
  singular1stPerson: Word('полистаю', 6),
  singular2ndPerson: Word('полистаешь', 6),
  singular3rdPerson: Word('полистает', 6),
  plural1stPerson: Word('полистаем', 6),
  plural2ndPerson: Word('полистаете', 6),
  plural3rdPerson: Word('полистают', 6),
  masculinePast: Word('полистал', 6),
  femininePast: Word('полистала', 6),
  neuterPast: Word('полистало', 6),
  pluralPast: Word('полистали', 6),
  imperativeInformal: Word('полистай', 6),
  imperativeFormal: Word('полистайте', 6),
  imperfect: [],
};

perfectVerbs.set(полистать.name.text, полистать);

export { полистать };