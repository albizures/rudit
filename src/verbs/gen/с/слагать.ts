import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слагать: PerfectVerb = {
  name: Word('слагать', 4),
  singular1stPerson: Word('слагаю', 4),
  singular2ndPerson: Word('слагаешь', 4),
  singular3rdPerson: Word('слагает', 4),
  plural1stPerson: Word('слагаем', 4),
  plural2ndPerson: Word('слагаете', 4),
  plural3rdPerson: Word('слагают', 4),
  masculinePast: Word('слагал', 4),
  femininePast: Word('слагала', 4),
  neuterPast: Word('слагало', 4),
  pluralPast: Word('слагали', 4),
  imperativeInformal: Word('слагай', 4),
  imperativeFormal: Word('слагайте', 4),
  imperfect: [],
};

perfectVerbs.set(слагать.name.text, слагать);

export { слагать };