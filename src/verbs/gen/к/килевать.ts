import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const килевать: PerfectVerb = {
  name: Word('килевать', 5),
  singular1stPerson: Word('килюю', 3),
  singular2ndPerson: Word('килюешь', 3),
  singular3rdPerson: Word('килюет', 3),
  plural1stPerson: Word('килюем', 3),
  plural2ndPerson: Word('килюете', 3),
  plural3rdPerson: Word('килюют', 3),
  masculinePast: Word('килевал', 5),
  femininePast: Word('килевала', 5),
  neuterPast: Word('килевало', 5),
  pluralPast: Word('килевали', 5),
  imperativeInformal: Word('килюй', 3),
  imperativeFormal: Word('килюйте', 3),
  imperfect: [],
};

perfectVerbs.set(килевать.name.text, килевать);

export { килевать };