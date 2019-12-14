import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шагать: PerfectVerb = {
  name: Word('шагать', 3),
  singular1stPerson: Word('шагаю', 3),
  singular2ndPerson: Word('шагаешь', 3),
  singular3rdPerson: Word('шагает', 3),
  plural1stPerson: Word('шагаем', 3),
  plural2ndPerson: Word('шагаете', 3),
  plural3rdPerson: Word('шагают', 3),
  masculinePast: Word('шагал', 3),
  femininePast: Word('шагала', 3),
  neuterPast: Word('шагало', 3),
  pluralPast: Word('шагали', 3),
  imperativeInformal: Word('шагай', 3),
  imperativeFormal: Word('шагайте', 3),
  imperfect: ['шагнуть'],
};

perfectVerbs.set(шагать.name.text, шагать);

export { шагать };