import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подразумевать: PerfectVerb = {
  name: Word('подразумевать', 10),
  singular1stPerson: Word('подразумеваю', 10),
  singular2ndPerson: Word('подразумеваешь', 10),
  singular3rdPerson: Word('подразумевает', 10),
  plural1stPerson: Word('подразумеваем', 10),
  plural2ndPerson: Word('подразумеваете', 10),
  plural3rdPerson: Word('подразумевают', 10),
  masculinePast: Word('подразумевал', 10),
  femininePast: Word('подразумевала', 10),
  neuterPast: Word('подразумевало', 10),
  pluralPast: Word('подразумевали', 10),
  imperativeInformal: Word('подразумевай', 10),
  imperativeFormal: Word('подразумевайте', 10),
  imperfect: [],
};

perfectVerbs.set(подразумевать.name.text, подразумевать);

export { подразумевать };