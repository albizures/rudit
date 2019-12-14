import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осознать: PerfectVerb = {
  name: Word('осознать', 5),
  singular1stPerson: Word('осознаю', 5),
  singular2ndPerson: Word('осознаешь', 5),
  singular3rdPerson: Word('осознает', 5),
  plural1stPerson: Word('осознаем', 5),
  plural2ndPerson: Word('осознаете', 5),
  plural3rdPerson: Word('осознают', 5),
  masculinePast: Word('осознал', 5),
  femininePast: Word('осознала', 5),
  neuterPast: Word('осознало', 5),
  pluralPast: Word('осознали', 5),
  imperativeInformal: Word('осознай', 5),
  imperativeFormal: Word('осознайте', 5),
  imperfect: ['осознавать'],
};

perfectVerbs.set(осознать.name.text, осознать);

export { осознать };