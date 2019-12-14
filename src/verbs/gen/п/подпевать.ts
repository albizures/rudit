import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпевать: PerfectVerb = {
  name: Word('подпевать', 6),
  singular1stPerson: Word('подпеваю', 6),
  singular2ndPerson: Word('подпеваешь', 6),
  singular3rdPerson: Word('подпевает', 6),
  plural1stPerson: Word('подпеваем', 6),
  plural2ndPerson: Word('подпеваете', 6),
  plural3rdPerson: Word('подпевают', 6),
  masculinePast: Word('подпевал', 6),
  femininePast: Word('подпевала', 6),
  neuterPast: Word('подпевало', 6),
  pluralPast: Word('подпевали', 6),
  imperativeInformal: Word('подпевай', 6),
  imperativeFormal: Word('подпевайте', 6),
  imperfect: [],
};

perfectVerbs.set(подпевать.name.text, подпевать);

export { подпевать };