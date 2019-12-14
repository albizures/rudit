import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выедать: PerfectVerb = {
  name: Word('выедать', 4),
  singular1stPerson: Word('выедаю', 4),
  singular2ndPerson: Word('выедаешь', 4),
  singular3rdPerson: Word('выедает', 4),
  plural1stPerson: Word('выедаем', 4),
  plural2ndPerson: Word('выедаете', 4),
  plural3rdPerson: Word('выедают', 4),
  masculinePast: Word('выедал', 4),
  femininePast: Word('выедала', 4),
  neuterPast: Word('выедало', 4),
  pluralPast: Word('выедали', 4),
  imperativeInformal: Word('выедай', 4),
  imperativeFormal: Word('выедайте', 4),
  imperfect: [],
};

perfectVerbs.set(выедать.name.text, выедать);

export { выедать };