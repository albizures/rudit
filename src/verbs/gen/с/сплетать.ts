import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплетать: PerfectVerb = {
  name: Word('сплетать', 5),
  singular1stPerson: Word('сплетаю', 5),
  singular2ndPerson: Word('сплетаешь', 5),
  singular3rdPerson: Word('сплетает', 5),
  plural1stPerson: Word('сплетаем', 5),
  plural2ndPerson: Word('сплетаете', 5),
  plural3rdPerson: Word('сплетают', 5),
  masculinePast: Word('сплетал', 5),
  femininePast: Word('сплетала', 5),
  neuterPast: Word('сплетало', 5),
  pluralPast: Word('сплетали', 5),
  imperativeInformal: Word('сплетай', 5),
  imperativeFormal: Word('сплетайте', 5),
  imperfect: [],
};

perfectVerbs.set(сплетать.name.text, сплетать);

export { сплетать };