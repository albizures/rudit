import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const низкопоклонничать: PerfectVerb = {
  name: Word('низкопоклонничать', 9),
  singular1stPerson: Word('низкопоклонничаю', 9),
  singular2ndPerson: Word('низкопоклонничаешь', 9),
  singular3rdPerson: Word('низкопоклонничает', 9),
  plural1stPerson: Word('низкопоклонничаем', 9),
  plural2ndPerson: Word('низкопоклонничаете', 9),
  plural3rdPerson: Word('низкопоклонничают', 9),
  masculinePast: Word('низкопоклонничал', 9),
  femininePast: Word('низкопоклонничала', 9),
  neuterPast: Word('низкопоклонничало', 9),
  pluralPast: Word('низкопоклонничали', 9),
  imperativeInformal: Word('низкопоклонничай', 9),
  imperativeFormal: Word('низкопоклонничайте', 9),
  imperfect: [],
};

perfectVerbs.set(низкопоклонничать.name.text, низкопоклонничать);

export { низкопоклонничать };