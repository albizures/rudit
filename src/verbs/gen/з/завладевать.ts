import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завладевать: PerfectVerb = {
  name: Word('завладевать', 8),
  singular1stPerson: Word('завладеваю', 8),
  singular2ndPerson: Word('завладеваешь', 8),
  singular3rdPerson: Word('завладевает', 8),
  plural1stPerson: Word('завладеваем', 8),
  plural2ndPerson: Word('завладеваете', 8),
  plural3rdPerson: Word('завладевают', 8),
  masculinePast: Word('завладевал', 8),
  femininePast: Word('завладевала', 8),
  neuterPast: Word('завладевало', 8),
  pluralPast: Word('завладевали', 8),
  imperativeInformal: Word('завладевай', 8),
  imperativeFormal: Word('завладевайте', 8),
  imperfect: [],
};

perfectVerbs.set(завладевать.name.text, завладевать);

export { завладевать };