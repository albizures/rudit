import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const излагать: PerfectVerb = {
  name: Word('излагать', 5),
  singular1stPerson: Word('излагаю', 5),
  singular2ndPerson: Word('излагаешь', 5),
  singular3rdPerson: Word('излагает', 5),
  plural1stPerson: Word('излагаем', 5),
  plural2ndPerson: Word('излагаете', 5),
  plural3rdPerson: Word('излагают', 5),
  masculinePast: Word('излагал', 5),
  femininePast: Word('излагала', 5),
  neuterPast: Word('излагало', 5),
  pluralPast: Word('излагали', 5),
  imperativeInformal: Word('излагай', 5),
  imperativeFormal: Word('излагайте', 5),
  imperfect: [],
};

perfectVerbs.set(излагать.name.text, излагать);

export { излагать };