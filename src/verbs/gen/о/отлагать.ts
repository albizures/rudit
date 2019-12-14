import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлагать: PerfectVerb = {
  name: Word('отлагать', 5),
  singular1stPerson: Word('отлагаю', 5),
  singular2ndPerson: Word('отлагаешь', 5),
  singular3rdPerson: Word('отлагает', 5),
  plural1stPerson: Word('отлагаем', 5),
  plural2ndPerson: Word('отлагаете', 5),
  plural3rdPerson: Word('отлагают', 5),
  masculinePast: Word('отлагал', 5),
  femininePast: Word('отлагала', 5),
  neuterPast: Word('отлагало', 5),
  pluralPast: Word('отлагали', 5),
  imperativeInformal: Word('отлагай', 5),
  imperativeFormal: Word('отлагайте', 5),
  imperfect: [],
};

perfectVerbs.set(отлагать.name.text, отлагать);

export { отлагать };