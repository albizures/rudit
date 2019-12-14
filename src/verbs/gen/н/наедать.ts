import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наедать: PerfectVerb = {
  name: Word('наедать', 4),
  singular1stPerson: Word('наедаю', 4),
  singular2ndPerson: Word('наедаешь', 4),
  singular3rdPerson: Word('наедает', 4),
  plural1stPerson: Word('наедаем', 4),
  plural2ndPerson: Word('наедаете', 4),
  plural3rdPerson: Word('наедают', 4),
  masculinePast: Word('наедал', 4),
  femininePast: Word('наедала', 4),
  neuterPast: Word('наедало', 4),
  pluralPast: Word('наедали', 4),
  imperativeInformal: Word('наедай', 4),
  imperativeFormal: Word('наедайте', 4),
  imperfect: [],
};

perfectVerbs.set(наедать.name.text, наедать);

export { наедать };