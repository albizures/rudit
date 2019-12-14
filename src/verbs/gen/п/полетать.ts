import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полетать: PerfectVerb = {
  name: Word('полетать', 5),
  singular1stPerson: Word('полетаю', 5),
  singular2ndPerson: Word('полетаешь', 5),
  singular3rdPerson: Word('полетает', 5),
  plural1stPerson: Word('полетаем', 5),
  plural2ndPerson: Word('полетаете', 5),
  plural3rdPerson: Word('полетают', 5),
  masculinePast: Word('полетал', 5),
  femininePast: Word('полетала', 5),
  neuterPast: Word('полетало', 5),
  pluralPast: Word('полетали', 5),
  imperativeInformal: Word('полетай', 5),
  imperativeFormal: Word('полетайте', 5),
  imperfect: [],
};

perfectVerbs.set(полетать.name.text, полетать);

export { полетать };