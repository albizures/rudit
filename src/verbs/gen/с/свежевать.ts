import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свежевать: PerfectVerb = {
  name: Word('свежевать', 6),
  singular1stPerson: Word('свежую', 4),
  singular2ndPerson: Word('свежуешь', 4),
  singular3rdPerson: Word('свежует', 4),
  plural1stPerson: Word('свежуем', 4),
  plural2ndPerson: Word('свежуете', 4),
  plural3rdPerson: Word('свежуют', 4),
  masculinePast: Word('свежевал', 6),
  femininePast: Word('свежевала', 6),
  neuterPast: Word('свежевало', 6),
  pluralPast: Word('свежевали', 6),
  imperativeInformal: Word('свежуй', 4),
  imperativeFormal: Word('свежуйте', 4),
  imperfect: [],
};

perfectVerbs.set(свежевать.name.text, свежевать);

export { свежевать };