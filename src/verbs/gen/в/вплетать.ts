import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вплетать: PerfectVerb = {
  name: Word('вплетать', 5),
  singular1stPerson: Word('вплетаю', 5),
  singular2ndPerson: Word('вплетаешь', 5),
  singular3rdPerson: Word('вплетает', 5),
  plural1stPerson: Word('вплетаем', 5),
  plural2ndPerson: Word('вплетаете', 5),
  plural3rdPerson: Word('вплетают', 5),
  masculinePast: Word('вплетал', 5),
  femininePast: Word('вплетала', 5),
  neuterPast: Word('вплетало', 5),
  pluralPast: Word('вплетали', 5),
  imperativeInformal: Word('вплетай', 5),
  imperativeFormal: Word('вплетайте', 5),
  imperfect: [],
};

perfectVerbs.set(вплетать.name.text, вплетать);

export { вплетать };