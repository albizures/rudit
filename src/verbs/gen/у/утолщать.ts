import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утолщать: PerfectVerb = {
  name: Word('утолщать', 5),
  singular1stPerson: Word('утолщаю', 5),
  singular2ndPerson: Word('утолщаешь', 5),
  singular3rdPerson: Word('утолщает', 5),
  plural1stPerson: Word('утолщаем', 5),
  plural2ndPerson: Word('утолщаете', 5),
  plural3rdPerson: Word('утолщают', 5),
  masculinePast: Word('утолщал', 5),
  femininePast: Word('утолщала', 5),
  neuterPast: Word('утолщало', 5),
  pluralPast: Word('утолщали', 5),
  imperativeInformal: Word('утолщай', 5),
  imperativeFormal: Word('утолщайте', 5),
  imperfect: [],
};

perfectVerbs.set(утолщать.name.text, утолщать);

export { утолщать };