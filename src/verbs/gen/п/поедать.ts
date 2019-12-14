import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поедать: PerfectVerb = {
  name: Word('поедать', 4),
  singular1stPerson: Word('поедаю', 4),
  singular2ndPerson: Word('поедаешь', 4),
  singular3rdPerson: Word('поедает', 4),
  plural1stPerson: Word('поедаем', 4),
  plural2ndPerson: Word('поедаете', 4),
  plural3rdPerson: Word('поедают', 4),
  masculinePast: Word('поедал', 4),
  femininePast: Word('поедала', 4),
  neuterPast: Word('поедало', 4),
  pluralPast: Word('поедали', 4),
  imperativeInformal: Word('поедай', 4),
  imperativeFormal: Word('поедайте', 4),
  imperfect: [],
};

perfectVerbs.set(поедать.name.text, поедать);

export { поедать };