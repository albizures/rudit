import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развешать: PerfectVerb = {
  name: Word('развешать', 4),
  singular1stPerson: Word('развешаю', 4),
  singular2ndPerson: Word('развешаешь', 4),
  singular3rdPerson: Word('развешает', 4),
  plural1stPerson: Word('развешаем', 4),
  plural2ndPerson: Word('развешаете', 4),
  plural3rdPerson: Word('развешают', 4),
  masculinePast: Word('развешал', 4),
  femininePast: Word('развешала', 4),
  neuterPast: Word('развешало', 4),
  pluralPast: Word('развешали', 4),
  imperativeInformal: Word('развешай', 4),
  imperativeFormal: Word('развешайте', 4),
  imperfect: [],
};

perfectVerbs.set(развешать.name.text, развешать);

export { развешать };