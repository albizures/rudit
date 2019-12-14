import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помрачать: PerfectVerb = {
  name: Word('помрачать', 6),
  singular1stPerson: Word('помрачаю', 6),
  singular2ndPerson: Word('помрачаешь', 6),
  singular3rdPerson: Word('помрачает', 6),
  plural1stPerson: Word('помрачаем', 6),
  plural2ndPerson: Word('помрачаете', 6),
  plural3rdPerson: Word('помрачают', 6),
  masculinePast: Word('помрачал', 6),
  femininePast: Word('помрачала', 6),
  neuterPast: Word('помрачало', 6),
  pluralPast: Word('помрачали', 6),
  imperativeInformal: Word('помрачай', 6),
  imperativeFormal: Word('помрачайте', 6),
  imperfect: [],
};

perfectVerbs.set(помрачать.name.text, помрачать);

export { помрачать };