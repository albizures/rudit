import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обобщать: PerfectVerb = {
  name: Word('обобщать', 5),
  singular1stPerson: Word('обобщаю', 5),
  singular2ndPerson: Word('обобщаешь', 5),
  singular3rdPerson: Word('обобщает', 5),
  plural1stPerson: Word('обобщаем', 5),
  plural2ndPerson: Word('обобщаете', 5),
  plural3rdPerson: Word('обобщают', 5),
  masculinePast: Word('обобщал', 5),
  femininePast: Word('обобщала', 5),
  neuterPast: Word('обобщало', 5),
  pluralPast: Word('обобщали', 5),
  imperativeInformal: Word('обобщай', 5),
  imperativeFormal: Word('обобщайте', 5),
  imperfect: [],
};

perfectVerbs.set(обобщать.name.text, обобщать);

export { обобщать };