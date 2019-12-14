import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отобедать: PerfectVerb = {
  name: Word('отобедать', 4),
  singular1stPerson: Word('отобедаю', 4),
  singular2ndPerson: Word('отобедаешь', 4),
  singular3rdPerson: Word('отобедает', 4),
  plural1stPerson: Word('отобедаем', 4),
  plural2ndPerson: Word('отобедаете', 4),
  plural3rdPerson: Word('отобедают', 4),
  masculinePast: Word('отобедал', 4),
  femininePast: Word('отобедала', 4),
  neuterPast: Word('отобедало', 4),
  pluralPast: Word('отобедали', 4),
  imperativeInformal: Word('отобедай', 4),
  imperativeFormal: Word('отобедайте', 4),
  imperfect: [],
};

perfectVerbs.set(отобедать.name.text, отобедать);

export { отобедать };