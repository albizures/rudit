import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завешать: PerfectVerb = {
  name: Word('завешать', 3),
  singular1stPerson: Word('завешаю', 3),
  singular2ndPerson: Word('завешаешь', 3),
  singular3rdPerson: Word('завешает', 3),
  plural1stPerson: Word('завешаем', 3),
  plural2ndPerson: Word('завешаете', 3),
  plural3rdPerson: Word('завешают', 3),
  masculinePast: Word('завешал', 3),
  femininePast: Word('завешала', 3),
  neuterPast: Word('завешало', 3),
  pluralPast: Word('завешали', 3),
  imperativeInformal: Word('завешай', 3),
  imperativeFormal: Word('завешайте', 3),
  imperfect: [],
};

perfectVerbs.set(завешать.name.text, завешать);

export { завешать };