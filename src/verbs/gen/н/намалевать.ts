import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намалевать: PerfectVerb = {
  name: Word('намалевать', 7),
  singular1stPerson: Word('намалюю', 5),
  singular2ndPerson: Word('намалюешь', 5),
  singular3rdPerson: Word('намалюет', 5),
  plural1stPerson: Word('намалюем', 5),
  plural2ndPerson: Word('намалюете', 5),
  plural3rdPerson: Word('намалюют', 5),
  masculinePast: Word('намалевал', 7),
  femininePast: Word('намалевала', 7),
  neuterPast: Word('намалевало', 7),
  pluralPast: Word('намалевали', 7),
  imperativeInformal: Word('намалюй', 5),
  imperativeFormal: Word('намалюйте', 5),
  imperfect: [],
};

perfectVerbs.set(намалевать.name.text, намалевать);

export { намалевать };