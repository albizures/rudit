import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшагать: PerfectVerb = {
  name: Word('отшагать', 5),
  singular1stPerson: Word('отшагаю', 5),
  singular2ndPerson: Word('отшагаешь', 5),
  singular3rdPerson: Word('отшагает', 5),
  plural1stPerson: Word('отшагаем', 5),
  plural2ndPerson: Word('отшагаете', 5),
  plural3rdPerson: Word('отшагают', 5),
  masculinePast: Word('отшагал', 5),
  femininePast: Word('отшагала', 5),
  neuterPast: Word('отшагало', 5),
  pluralPast: Word('отшагали', 5),
  imperativeInformal: Word('отшагай', 5),
  imperativeFormal: Word('отшагайте', 5),
  imperfect: [],
};

perfectVerbs.set(отшагать.name.text, отшагать);

export { отшагать };