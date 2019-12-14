import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доплетать: PerfectVerb = {
  name: Word('доплетать', 6),
  singular1stPerson: Word('доплетаю', 6),
  singular2ndPerson: Word('доплетаешь', 6),
  singular3rdPerson: Word('доплетает', 6),
  plural1stPerson: Word('доплетаем', 6),
  plural2ndPerson: Word('доплетаете', 6),
  plural3rdPerson: Word('доплетают', 6),
  masculinePast: Word('доплетал', 6),
  femininePast: Word('доплетала', 6),
  neuterPast: Word('доплетало', 6),
  pluralPast: Word('доплетали', 6),
  imperativeInformal: Word('доплетай', 6),
  imperativeFormal: Word('доплетайте', 6),
  imperfect: [],
};

perfectVerbs.set(доплетать.name.text, доплетать);

export { доплетать };