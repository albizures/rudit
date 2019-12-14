import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поворковать: PerfectVerb = {
  name: Word('поворковать', 8),
  singular1stPerson: Word('поворкую', 6),
  singular2ndPerson: Word('поворкуешь', 6),
  singular3rdPerson: Word('поворкует', 6),
  plural1stPerson: Word('поворкуем', 6),
  plural2ndPerson: Word('поворкуете', 6),
  plural3rdPerson: Word('поворкуют', 6),
  masculinePast: Word('поворковал', 8),
  femininePast: Word('поворковала', 8),
  neuterPast: Word('поворковало', 8),
  pluralPast: Word('поворковали', 8),
  imperativeInformal: Word('поворкуй', 6),
  imperativeFormal: Word('поворкуйте', 6),
  imperfect: [],
};

perfectVerbs.set(поворковать.name.text, поворковать);

export { поворковать };