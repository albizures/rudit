import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разобщать: PerfectVerb = {
  name: Word('разобщать', 6),
  singular1stPerson: Word('разобщаю', 6),
  singular2ndPerson: Word('разобщаешь', 6),
  singular3rdPerson: Word('разобщает', 6),
  plural1stPerson: Word('разобщаем', 6),
  plural2ndPerson: Word('разобщаете', 6),
  plural3rdPerson: Word('разобщают', 6),
  masculinePast: Word('разобщал', 6),
  femininePast: Word('разобщала', 6),
  neuterPast: Word('разобщало', 6),
  pluralPast: Word('разобщали', 6),
  imperativeInformal: Word('разобщай', 6),
  imperativeFormal: Word('разобщайте', 6),
  imperfect: [],
};

perfectVerbs.set(разобщать.name.text, разобщать);

export { разобщать };