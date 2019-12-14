import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заедать: PerfectVerb = {
  name: Word('заедать', 4),
  singular1stPerson: Word('заедаю', 4),
  singular2ndPerson: Word('заедаешь', 4),
  singular3rdPerson: Word('заедает', 4),
  plural1stPerson: Word('заедаем', 4),
  plural2ndPerson: Word('заедаете', 4),
  plural3rdPerson: Word('заедают', 4),
  masculinePast: Word('заедал', 4),
  femininePast: Word('заедала', 4),
  neuterPast: Word('заедало', 4),
  pluralPast: Word('заедали', 4),
  imperativeInformal: Word('заедай', 4),
  imperativeFormal: Word('заедайте', 4),
  imperfect: [],
};

perfectVerbs.set(заедать.name.text, заедать);

export { заедать };