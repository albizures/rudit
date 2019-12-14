import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const овевать: PerfectVerb = {
  name: Word('овевать', 4),
  singular1stPerson: Word('овеваю', 4),
  singular2ndPerson: Word('овеваешь', 4),
  singular3rdPerson: Word('овевает', 4),
  plural1stPerson: Word('овеваем', 4),
  plural2ndPerson: Word('овеваете', 4),
  plural3rdPerson: Word('овевают', 4),
  masculinePast: Word('овевал', 4),
  femininePast: Word('овевала', 4),
  neuterPast: Word('овевало', 4),
  pluralPast: Word('овевали', 4),
  imperativeInformal: Word('овевай', 4),
  imperativeFormal: Word('овевайте', 4),
  imperfect: [],
};

perfectVerbs.set(овевать.name.text, овевать);

export { овевать };