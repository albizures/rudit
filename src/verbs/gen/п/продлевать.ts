import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продлевать: PerfectVerb = {
  name: Word('продлевать', 7),
  singular1stPerson: Word('продлеваю', 7),
  singular2ndPerson: Word('продлеваешь', 7),
  singular3rdPerson: Word('продлевает', 7),
  plural1stPerson: Word('продлеваем', 7),
  plural2ndPerson: Word('продлеваете', 7),
  plural3rdPerson: Word('продлевают', 7),
  masculinePast: Word('продлевал', 7),
  femininePast: Word('продлевала', 7),
  neuterPast: Word('продлевало', 7),
  pluralPast: Word('продлевали', 7),
  imperativeInformal: Word('продлевай', 7),
  imperativeFormal: Word('продлевайте', 7),
  imperfect: [],
};

perfectVerbs.set(продлевать.name.text, продлевать);

export { продлевать };