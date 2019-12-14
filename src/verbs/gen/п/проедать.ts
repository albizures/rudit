import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проедать: PerfectVerb = {
  name: Word('проедать', 5),
  singular1stPerson: Word('проедаю', 5),
  singular2ndPerson: Word('проедаешь', 5),
  singular3rdPerson: Word('проедает', 5),
  plural1stPerson: Word('проедаем', 5),
  plural2ndPerson: Word('проедаете', 5),
  plural3rdPerson: Word('проедают', 5),
  masculinePast: Word('проедал', 5),
  femininePast: Word('проедала', 5),
  neuterPast: Word('проедало', 5),
  pluralPast: Word('проедали', 5),
  imperativeInformal: Word('проедай', 5),
  imperativeFormal: Word('проедайте', 5),
  imperfect: [],
};

perfectVerbs.set(проедать.name.text, проедать);

export { проедать };