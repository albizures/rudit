import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уповать: PerfectVerb = {
  name: Word('уповать', 4),
  singular1stPerson: Word('уповаю', 4),
  singular2ndPerson: Word('уповаешь', 4),
  singular3rdPerson: Word('уповает', 4),
  plural1stPerson: Word('уповаем', 4),
  plural2ndPerson: Word('уповаете', 4),
  plural3rdPerson: Word('уповают', 4),
  masculinePast: Word('уповал', 4),
  femininePast: Word('уповала', 4),
  neuterPast: Word('уповало', 4),
  pluralPast: Word('уповали', 4),
  imperativeInformal: Word('уповай', 4),
  imperativeFormal: Word('уповайте', 4),
  imperfect: [],
};

perfectVerbs.set(уповать.name.text, уповать);

export { уповать };