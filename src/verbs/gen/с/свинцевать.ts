import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свинцевать: PerfectVerb = {
  name: Word('свинцевать', 7),
  singular1stPerson: Word('свинцую', 5),
  singular2ndPerson: Word('свинцуешь', 5),
  singular3rdPerson: Word('свинцует', 5),
  plural1stPerson: Word('свинцуем', 5),
  plural2ndPerson: Word('свинцуете', 5),
  plural3rdPerson: Word('свинцуют', 5),
  masculinePast: Word('свинцевал', 7),
  femininePast: Word('свинцевала', 7),
  neuterPast: Word('свинцевало', 7),
  pluralPast: Word('свинцевали', 7),
  imperativeInformal: Word('свинцуй', 5),
  imperativeFormal: Word('свинцуйте', 5),
  imperfect: [],
};

perfectVerbs.set(свинцевать.name.text, свинцевать);

export { свинцевать };