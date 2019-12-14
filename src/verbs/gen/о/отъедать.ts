import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отъедать: PerfectVerb = {
  name: Word('отъедать', 5),
  singular1stPerson: Word('отъедаю', 5),
  singular2ndPerson: Word('отъедаешь', 5),
  singular3rdPerson: Word('отъедает', 5),
  plural1stPerson: Word('отъедаем', 5),
  plural2ndPerson: Word('отъедаете', 5),
  plural3rdPerson: Word('отъедают', 5),
  masculinePast: Word('отъедал', 5),
  femininePast: Word('отъедала', 5),
  neuterPast: Word('отъедало', 5),
  pluralPast: Word('отъедали', 5),
  imperativeInformal: Word('отъедай', 5),
  imperativeFormal: Word('отъедайте', 5),
  imperfect: [],
};

perfectVerbs.set(отъедать.name.text, отъедать);

export { отъедать };