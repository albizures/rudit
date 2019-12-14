import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подъедать: PerfectVerb = {
  name: Word('подъедать', 6),
  singular1stPerson: Word('подъедаю', 6),
  singular2ndPerson: Word('подъедаешь', 6),
  singular3rdPerson: Word('подъедает', 6),
  plural1stPerson: Word('подъедаем', 6),
  plural2ndPerson: Word('подъедаете', 6),
  plural3rdPerson: Word('подъедают', 6),
  masculinePast: Word('подъедал', 6),
  femininePast: Word('подъедала', 6),
  neuterPast: Word('подъедало', 6),
  pluralPast: Word('подъедали', 6),
  imperativeInformal: Word('подъедай', 6),
  imperativeFormal: Word('подъедайте', 6),
  imperfect: [],
};

perfectVerbs.set(подъедать.name.text, подъедать);

export { подъедать };