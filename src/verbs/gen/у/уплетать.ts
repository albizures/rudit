import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уплетать: PerfectVerb = {
  name: Word('уплетать', 5),
  singular1stPerson: Word('уплетаю', 5),
  singular2ndPerson: Word('уплетаешь', 5),
  singular3rdPerson: Word('уплетает', 5),
  plural1stPerson: Word('уплетаем', 5),
  plural2ndPerson: Word('уплетаете', 5),
  plural3rdPerson: Word('уплетают', 5),
  masculinePast: Word('уплетал', 5),
  femininePast: Word('уплетала', 5),
  neuterPast: Word('уплетало', 5),
  pluralPast: Word('уплетали', 5),
  imperativeInformal: Word('уплетай', 5),
  imperativeFormal: Word('уплетайте', 5),
  imperfect: [],
};

perfectVerbs.set(уплетать.name.text, уплетать);

export { уплетать };