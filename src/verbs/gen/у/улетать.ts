import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улетать: PerfectVerb = {
  name: Word('улетать', 4),
  singular1stPerson: Word('улетаю', 4),
  singular2ndPerson: Word('улетаешь', 4),
  singular3rdPerson: Word('улетает', 4),
  plural1stPerson: Word('улетаем', 4),
  plural2ndPerson: Word('улетаете', 4),
  plural3rdPerson: Word('улетают', 4),
  masculinePast: Word('улетал', 4),
  femininePast: Word('улетала', 4),
  neuterPast: Word('улетало', 4),
  pluralPast: Word('улетали', 4),
  imperativeInformal: Word('улетай', 4),
  imperativeFormal: Word('улетайте', 4),
  imperfect: [],
};

perfectVerbs.set(улетать.name.text, улетать);

export { улетать };