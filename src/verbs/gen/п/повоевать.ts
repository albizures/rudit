import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повоевать: PerfectVerb = {
  name: Word('повоевать', 6),
  singular1stPerson: Word('повоюю', 4),
  singular2ndPerson: Word('повоюешь', 4),
  singular3rdPerson: Word('повоюет', 4),
  plural1stPerson: Word('повоюем', 4),
  plural2ndPerson: Word('повоюете', 4),
  plural3rdPerson: Word('повоюют', 4),
  masculinePast: Word('повоевал', 6),
  femininePast: Word('повоевала', 6),
  neuterPast: Word('повоевало', 6),
  pluralPast: Word('повоевали', 6),
  imperativeInformal: Word('повоюй', 4),
  imperativeFormal: Word('повоюйте', 4),
  imperfect: [],
};

perfectVerbs.set(повоевать.name.text, повоевать);

export { повоевать };