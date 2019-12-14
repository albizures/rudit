import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снедать: PerfectVerb = {
  name: Word('снедать', 4),
  singular1stPerson: Word('снедаю', 4),
  singular2ndPerson: Word('снедаешь', 4),
  singular3rdPerson: Word('снедает', 4),
  plural1stPerson: Word('снедаем', 4),
  plural2ndPerson: Word('снедаете', 4),
  plural3rdPerson: Word('снедают', 4),
  masculinePast: Word('снедал', 4),
  femininePast: Word('снедала', 4),
  neuterPast: Word('снедало', 4),
  pluralPast: Word('снедали', 4),
  imperativeInformal: Word('снедай', 4),
  imperativeFormal: Word('снедайте', 4),
  imperfect: [],
};

perfectVerbs.set(снедать.name.text, снедать);

export { снедать };