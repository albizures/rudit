import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъедать: PerfectVerb = {
  name: Word('разъедать', 6),
  singular1stPerson: Word('разъедаю', 6),
  singular2ndPerson: Word('разъедаешь', 6),
  singular3rdPerson: Word('разъедает', 6),
  plural1stPerson: Word('разъедаем', 6),
  plural2ndPerson: Word('разъедаете', 6),
  plural3rdPerson: Word('разъедают', 6),
  masculinePast: Word('разъедал', 6),
  femininePast: Word('разъедала', 6),
  neuterPast: Word('разъедало', 6),
  pluralPast: Word('разъедали', 6),
  imperativeInformal: Word('разъедай', 6),
  imperativeFormal: Word('разъедайте', 6),
  imperfect: ['разъесть'],
};

perfectVerbs.set(разъедать.name.text, разъедать);

export { разъедать };