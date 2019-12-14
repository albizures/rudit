import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const безобразничать: PerfectVerb = {
  name: Word('безобразничать', 6),
  singular1stPerson: Word('безобразничаю', 6),
  singular2ndPerson: Word('безобразничаешь', 6),
  singular3rdPerson: Word('безобразничает', 6),
  plural1stPerson: Word('безобразничаем', 6),
  plural2ndPerson: Word('безобразничаете', 6),
  plural3rdPerson: Word('безобразничают', 6),
  masculinePast: Word('безобразничал', 6),
  femininePast: Word('безобразничала', 6),
  neuterPast: Word('безобразничало', 6),
  pluralPast: Word('безобразничали', 6),
  imperativeInformal: Word('безобразничай', 6),
  imperativeFormal: Word('безобразничайте', 6),
  imperfect: [],
};

perfectVerbs.set(безобразничать.name.text, безобразничать);

export { безобразничать };