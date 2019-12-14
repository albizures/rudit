import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъедать: PerfectVerb = {
  name: Word('изъедать', 5),
  singular1stPerson: Word('изъедаю', 5),
  singular2ndPerson: Word('изъедаешь', 5),
  singular3rdPerson: Word('изъедает', 5),
  plural1stPerson: Word('изъедаем', 5),
  plural2ndPerson: Word('изъедаете', 5),
  plural3rdPerson: Word('изъедают', 5),
  masculinePast: Word('изъедал', 5),
  femininePast: Word('изъедала', 5),
  neuterPast: Word('изъедало', 5),
  pluralPast: Word('изъедали', 5),
  imperativeInformal: Word('изъедай', 5),
  imperativeFormal: Word('изъедайте', 5),
  imperfect: [],
};

perfectVerbs.set(изъедать.name.text, изъедать);

export { изъедать };