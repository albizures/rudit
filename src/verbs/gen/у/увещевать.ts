import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увещевать: PerfectVerb = {
  name: Word('увещевать', 6),
  singular1stPerson: Word('увещеваю', 6),
  singular2ndPerson: Word('увещеваешь', 6),
  singular3rdPerson: Word('увещевает', 6),
  plural1stPerson: Word('увещеваем', 6),
  plural2ndPerson: Word('увещеваете', 6),
  plural3rdPerson: Word('увещевают', 6),
  masculinePast: Word('увещевал', 6),
  femininePast: Word('увещевала', 6),
  neuterPast: Word('увещевало', 6),
  pluralPast: Word('увещевали', 6),
  imperativeInformal: Word('увещевай', 6),
  imperativeFormal: Word('увещевайте', 6),
  imperfect: [],
};

perfectVerbs.set(увещевать.name.text, увещевать);

export { увещевать };