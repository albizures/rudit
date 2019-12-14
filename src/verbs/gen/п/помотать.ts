import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помотать: PerfectVerb = {
  name: Word('помотать', 5),
  singular1stPerson: Word('помотаю', 5),
  singular2ndPerson: Word('помотаешь', 5),
  singular3rdPerson: Word('помотает', 5),
  plural1stPerson: Word('помотаем', 5),
  plural2ndPerson: Word('помотаете', 5),
  plural3rdPerson: Word('помотают', 5),
  masculinePast: Word('помотал', 5),
  femininePast: Word('помотала', 5),
  neuterPast: Word('помотало', 5),
  pluralPast: Word('помотали', 5),
  imperativeInformal: Word('помотай', 5),
  imperativeFormal: Word('помотайте', 5),
  imperfect: [],
};

perfectVerbs.set(помотать.name.text, помотать);

export { помотать };