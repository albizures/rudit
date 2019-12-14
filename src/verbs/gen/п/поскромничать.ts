import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поскромничать: PerfectVerb = {
  name: Word('поскромничать', 5),
  singular1stPerson: Word('поскромничаю', 5),
  singular2ndPerson: Word('поскромничаешь', 5),
  singular3rdPerson: Word('поскромничает', 5),
  plural1stPerson: Word('поскромничаем', 5),
  plural2ndPerson: Word('поскромничаете', 5),
  plural3rdPerson: Word('поскромничают', 5),
  masculinePast: Word('поскромничал', 5),
  femininePast: Word('поскромничала', 5),
  neuterPast: Word('поскромничало', 5),
  pluralPast: Word('поскромничали', 5),
  imperativeInformal: Word('поскромничай', 5),
  imperativeFormal: Word('поскромничайте', 5),
  imperfect: [],
};

perfectVerbs.set(поскромничать.name.text, поскромничать);

export { поскромничать };