import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съедать: PerfectVerb = {
  name: Word('съедать', 4),
  singular1stPerson: Word('съедаю', 4),
  singular2ndPerson: Word('съедаешь', 4),
  singular3rdPerson: Word('съедает', 4),
  plural1stPerson: Word('съедаем', 4),
  plural2ndPerson: Word('съедаете', 4),
  plural3rdPerson: Word('съедают', 4),
  masculinePast: Word('съедал', 4),
  femininePast: Word('съедала', 4),
  neuterPast: Word('съедало', 4),
  pluralPast: Word('съедали', 4),
  imperativeInformal: Word('съедай', 4),
  imperativeFormal: Word('съедайте', 4),
  imperfect: [],
};

perfectVerbs.set(съедать.name.text, съедать);

export { съедать };