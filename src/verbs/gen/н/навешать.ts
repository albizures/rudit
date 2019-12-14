import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навешать: PerfectVerb = {
  name: Word('навешать', 3),
  singular1stPerson: Word('навешаю', 3),
  singular2ndPerson: Word('навешаешь', 3),
  singular3rdPerson: Word('навешает', 3),
  plural1stPerson: Word('навешаем', 3),
  plural2ndPerson: Word('навешаете', 3),
  plural3rdPerson: Word('навешают', 3),
  masculinePast: Word('навешал', 3),
  femininePast: Word('навешала', 3),
  neuterPast: Word('навешало', 3),
  pluralPast: Word('навешали', 3),
  imperativeInformal: Word('навешай', 3),
  imperativeFormal: Word('навешайте', 3),
  imperfect: [],
};

perfectVerbs.set(навешать.name.text, навешать);

export { навешать };