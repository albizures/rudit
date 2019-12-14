import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осознавать: PerfectVerb = {
  name: Word('осознавать', 7),
  singular1stPerson: Word('осознаю', 6),
  singular2ndPerson: Word('осознаёшь', 5),
  singular3rdPerson: Word('осознаёт', 5),
  plural1stPerson: Word('осознаём', 5),
  plural2ndPerson: Word('осознаёте', 5),
  plural3rdPerson: Word('осознают', 6),
  masculinePast: Word('осознавал', 7),
  femininePast: Word('осознавала', 7),
  neuterPast: Word('осознавало', 7),
  pluralPast: Word('осознавали', 7),
  imperativeInformal: Word('осознавай', 7),
  imperativeFormal: Word('осознавайте', 7),
  imperfect: ['осознать'],
};

perfectVerbs.set(осознавать.name.text, осознавать);

export { осознавать };