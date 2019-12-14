import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позагорать: PerfectVerb = {
  name: Word('позагорать', 7),
  singular1stPerson: Word('позагораю', 7),
  singular2ndPerson: Word('позагораешь', 7),
  singular3rdPerson: Word('позагорает', 7),
  plural1stPerson: Word('позагораем', 7),
  plural2ndPerson: Word('позагораете', 7),
  plural3rdPerson: Word('позагорают', 7),
  masculinePast: Word('позагорал', 7),
  femininePast: Word('позагорала', 7),
  neuterPast: Word('позагорало', 7),
  pluralPast: Word('позагорали', 7),
  imperativeInformal: Word('позагорай', 7),
  imperativeFormal: Word('позагорайте', 7),
  imperfect: [],
};

perfectVerbs.set(позагорать.name.text, позагорать);

export { позагорать };