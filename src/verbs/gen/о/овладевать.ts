import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const овладевать: PerfectVerb = {
  name: Word('овладевать', 7),
  singular1stPerson: Word('овладеваю', 7),
  singular2ndPerson: Word('овладеваешь', 7),
  singular3rdPerson: Word('овладевает', 7),
  plural1stPerson: Word('овладеваем', 7),
  plural2ndPerson: Word('овладеваете', 7),
  plural3rdPerson: Word('овладевают', 7),
  masculinePast: Word('овладевал', 7),
  femininePast: Word('овладевала', 7),
  neuterPast: Word('овладевало', 7),
  pluralPast: Word('овладевали', 7),
  imperativeInformal: Word('овладевай', 7),
  imperativeFormal: Word('овладевайте', 7),
  imperfect: [],
};

perfectVerbs.set(овладевать.name.text, овладевать);

export { овладевать };