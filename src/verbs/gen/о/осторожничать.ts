import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осторожничать: PerfectVerb = {
  name: Word('осторожничать', 5),
  singular1stPerson: Word('осторожничаю', 5),
  singular2ndPerson: Word('осторожничаешь', 5),
  singular3rdPerson: Word('осторожничает', 5),
  plural1stPerson: Word('осторожничаем', 5),
  plural2ndPerson: Word('осторожничаете', 5),
  plural3rdPerson: Word('осторожничают', 5),
  masculinePast: Word('осторожничал', 5),
  femininePast: Word('осторожничала', 5),
  neuterPast: Word('осторожничало', 5),
  pluralPast: Word('осторожничали', 5),
  imperativeInformal: Word('осторожничай', 5),
  imperativeFormal: Word('осторожничайте', 5),
  imperfect: [],
};

perfectVerbs.set(осторожничать.name.text, осторожничать);

export { осторожничать };