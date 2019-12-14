import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мухлевать: PerfectVerb = {
  name: Word('мухлевать', 6),
  singular1stPerson: Word('мухлюю', 4),
  singular2ndPerson: Word('мухлюешь', 4),
  singular3rdPerson: Word('мухлюет', 4),
  plural1stPerson: Word('мухлюем', 4),
  plural2ndPerson: Word('мухлюете', 4),
  plural3rdPerson: Word('мухлюют', 4),
  masculinePast: Word('мухлевал', 6),
  femininePast: Word('мухлевала', 6),
  neuterPast: Word('мухлевало', 6),
  pluralPast: Word('мухлевали', 6),
  imperativeInformal: Word('мухлюй', 4),
  imperativeFormal: Word('мухлюйте', 4),
  imperfect: ['смухлевать'],
};

perfectVerbs.set(мухлевать.name.text, мухлевать);

export { мухлевать };