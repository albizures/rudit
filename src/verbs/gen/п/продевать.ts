import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продевать: PerfectVerb = {
  name: Word('продевать', 6),
  singular1stPerson: Word('продеваю', 6),
  singular2ndPerson: Word('продеваешь', 6),
  singular3rdPerson: Word('продевает', 6),
  plural1stPerson: Word('продеваем', 6),
  plural2ndPerson: Word('продеваете', 6),
  plural3rdPerson: Word('продевают', 6),
  masculinePast: Word('продевал', 6),
  femininePast: Word('продевала', 6),
  neuterPast: Word('продевало', 6),
  pluralPast: Word('продевали', 6),
  imperativeInformal: Word('продевай', 6),
  imperativeFormal: Word('продевайте', 6),
  imperfect: [],
};

perfectVerbs.set(продевать.name.text, продевать);

export { продевать };