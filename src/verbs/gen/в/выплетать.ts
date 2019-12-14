import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплетать: PerfectVerb = {
  name: Word('выплетать', 6),
  singular1stPerson: Word('выплетаю', 6),
  singular2ndPerson: Word('выплетаешь', 6),
  singular3rdPerson: Word('выплетает', 6),
  plural1stPerson: Word('выплетаем', 6),
  plural2ndPerson: Word('выплетаете', 6),
  plural3rdPerson: Word('выплетают', 6),
  masculinePast: Word('выплетал', 6),
  femininePast: Word('выплетала', 6),
  neuterPast: Word('выплетало', 6),
  pluralPast: Word('выплетали', 6),
  imperativeInformal: Word('выплетай', 6),
  imperativeFormal: Word('выплетайте', 6),
  imperfect: [],
};

perfectVerbs.set(выплетать.name.text, выплетать);

export { выплетать };