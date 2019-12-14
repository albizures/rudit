import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помешать: PerfectVerb = {
  name: Word('помешать', 5),
  singular1stPerson: Word('помешаю', 5),
  singular2ndPerson: Word('помешаешь', 5),
  singular3rdPerson: Word('помешает', 5),
  plural1stPerson: Word('помешаем', 5),
  plural2ndPerson: Word('помешаете', 5),
  plural3rdPerson: Word('помешают', 5),
  masculinePast: Word('помешал', 5),
  femininePast: Word('помешала', 5),
  neuterPast: Word('помешало', 5),
  pluralPast: Word('помешали', 5),
  imperativeInformal: Word('помешай', 5),
  imperativeFormal: Word('помешайте', 5),
  imperfect: [],
};

perfectVerbs.set(помешать.name.text, помешать);

export { помешать };