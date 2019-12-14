import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обедать: PerfectVerb = {
  name: Word('обедать', 2),
  singular1stPerson: Word('обедаю', 2),
  singular2ndPerson: Word('обедаешь', 2),
  singular3rdPerson: Word('обедает', 2),
  plural1stPerson: Word('обедаем', 2),
  plural2ndPerson: Word('обедаете', 2),
  plural3rdPerson: Word('обедают', 2),
  masculinePast: Word('обедал', 2),
  femininePast: Word('обедала', 2),
  neuterPast: Word('обедало', 2),
  pluralPast: Word('обедали', 2),
  imperativeInformal: Word('обедай', 2),
  imperativeFormal: Word('обедайте', 2),
  imperfect: ['пообедать'],
};

perfectVerbs.set(обедать.name.text, обедать);

export { обедать };