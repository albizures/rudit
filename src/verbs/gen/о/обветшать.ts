import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обветшать: PerfectVerb = {
  name: Word('обветшать', 6),
  singular1stPerson: Word('обветшаю', 6),
  singular2ndPerson: Word('обветшаешь', 6),
  singular3rdPerson: Word('обветшает', 6),
  plural1stPerson: Word('обветшаем', 6),
  plural2ndPerson: Word('обветшаете', 6),
  plural3rdPerson: Word('обветшают', 6),
  masculinePast: Word('обветшал', 6),
  femininePast: Word('обветшала', 6),
  neuterPast: Word('обветшало', 6),
  pluralPast: Word('обветшали', 6),
  imperativeInformal: Word('обветшай', 6),
  imperativeFormal: Word('обветшайте', 6),
  imperfect: [],
};

perfectVerbs.set(обветшать.name.text, обветшать);

export { обветшать };