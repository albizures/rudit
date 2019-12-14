import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доедать: PerfectVerb = {
  name: Word('доедать', 4),
  singular1stPerson: Word('доедаю', 4),
  singular2ndPerson: Word('доедаешь', 4),
  singular3rdPerson: Word('доедает', 4),
  plural1stPerson: Word('доедаем', 4),
  plural2ndPerson: Word('доедаете', 4),
  plural3rdPerson: Word('доедают', 4),
  masculinePast: Word('доедал', 4),
  femininePast: Word('доедала', 4),
  neuterPast: Word('доедало', 4),
  pluralPast: Word('доедали', 4),
  imperativeInformal: Word('доедай', 4),
  imperativeFormal: Word('доедайте', 4),
  imperfect: [],
};

perfectVerbs.set(доедать.name.text, доедать);

export { доедать };