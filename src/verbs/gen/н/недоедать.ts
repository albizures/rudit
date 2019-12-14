import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоедать: PerfectVerb = {
  name: Word('недоедать', 6),
  singular1stPerson: Word('недоедаю', 6),
  singular2ndPerson: Word('недоедаешь', 6),
  singular3rdPerson: Word('недоедает', 6),
  plural1stPerson: Word('недоедаем', 6),
  plural2ndPerson: Word('недоедаете', 6),
  plural3rdPerson: Word('недоедают', 6),
  masculinePast: Word('недоедал', 6),
  femininePast: Word('недоедала', 6),
  neuterPast: Word('недоедало', 6),
  pluralPast: Word('недоедали', 6),
  imperativeInformal: Word('недоедай', 6),
  imperativeFormal: Word('недоедайте', 6),
  imperfect: [],
};

perfectVerbs.set(недоедать.name.text, недоедать);

export { недоедать };