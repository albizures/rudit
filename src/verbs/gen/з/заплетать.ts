import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплетать: PerfectVerb = {
  name: Word('заплетать', 6),
  singular1stPerson: Word('заплетаю', 6),
  singular2ndPerson: Word('заплетаешь', 6),
  singular3rdPerson: Word('заплетает', 6),
  plural1stPerson: Word('заплетаем', 6),
  plural2ndPerson: Word('заплетаете', 6),
  plural3rdPerson: Word('заплетают', 6),
  masculinePast: Word('заплетал', 6),
  femininePast: Word('заплетала', 6),
  neuterPast: Word('заплетало', 6),
  pluralPast: Word('заплетали', 6),
  imperativeInformal: Word('заплетай', 6),
  imperativeFormal: Word('заплетайте', 6),
  imperfect: [],
};

perfectVerbs.set(заплетать.name.text, заплетать);

export { заплетать };