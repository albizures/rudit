import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надоедать: PerfectVerb = {
  name: Word('надоедать', 6),
  singular1stPerson: Word('надоедаю', 6),
  singular2ndPerson: Word('надоедаешь', 6),
  singular3rdPerson: Word('надоедает', 6),
  plural1stPerson: Word('надоедаем', 6),
  plural2ndPerson: Word('надоедаете', 6),
  plural3rdPerson: Word('надоедают', 6),
  masculinePast: Word('надоедал', 6),
  femininePast: Word('надоедала', 6),
  neuterPast: Word('надоедало', 6),
  pluralPast: Word('надоедали', 6),
  imperativeInformal: Word('надоедай', 6),
  imperativeFormal: Word('надоедайте', 6),
  imperfect: ['надоесть'],
};

perfectVerbs.set(надоедать.name.text, надоедать);

export { надоедать };