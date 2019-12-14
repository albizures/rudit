import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвешать: PerfectVerb = {
  name: Word('обвешать', 3),
  singular1stPerson: Word('обвешаю', 3),
  singular2ndPerson: Word('обвешаешь', 3),
  singular3rdPerson: Word('обвешает', 3),
  plural1stPerson: Word('обвешаем', 3),
  plural2ndPerson: Word('обвешаете', 3),
  plural3rdPerson: Word('обвешают', 3),
  masculinePast: Word('обвешал', 3),
  femininePast: Word('обвешала', 3),
  neuterPast: Word('обвешало', 3),
  pluralPast: Word('обвешали', 3),
  imperativeInformal: Word('обвешай', 3),
  imperativeFormal: Word('обвешайте', 3),
  imperfect: [],
};

perfectVerbs.set(обвешать.name.text, обвешать);

export { обвешать };