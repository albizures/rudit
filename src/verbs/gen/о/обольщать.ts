import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обольщать: PerfectVerb = {
  name: Word('обольщать', 6),
  singular1stPerson: Word('обольщаю', 6),
  singular2ndPerson: Word('обольщаешь', 6),
  singular3rdPerson: Word('обольщает', 6),
  plural1stPerson: Word('обольщаем', 6),
  plural2ndPerson: Word('обольщаете', 6),
  plural3rdPerson: Word('обольщают', 6),
  masculinePast: Word('обольщал', 6),
  femininePast: Word('обольщала', 6),
  neuterPast: Word('обольщало', 6),
  pluralPast: Word('обольщали', 6),
  imperativeInformal: Word('обольщай', 6),
  imperativeFormal: Word('обольщайте', 6),
  imperfect: [],
};

perfectVerbs.set(обольщать.name.text, обольщать);

export { обольщать };