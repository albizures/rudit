import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полагать: PerfectVerb = {
  name: Word('полагать', 5),
  singular1stPerson: Word('полагаю', 5),
  singular2ndPerson: Word('полагаешь', 5),
  singular3rdPerson: Word('полагает', 5),
  plural1stPerson: Word('полагаем', 5),
  plural2ndPerson: Word('полагаете', 5),
  plural3rdPerson: Word('полагают', 5),
  masculinePast: Word('полагал', 5),
  femininePast: Word('полагала', 5),
  neuterPast: Word('полагало', 5),
  pluralPast: Word('полагали', 5),
  imperativeInformal: Word('полагай', 5),
  imperativeFormal: Word('полагайте', 5),
  imperfect: [],
};

perfectVerbs.set(полагать.name.text, полагать);

export { полагать };