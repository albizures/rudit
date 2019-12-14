import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обгорать: PerfectVerb = {
  name: Word('обгорать', 5),
  singular1stPerson: Word('обгораю', 5),
  singular2ndPerson: Word('обгораешь', 5),
  singular3rdPerson: Word('обгорает', 5),
  plural1stPerson: Word('обгораем', 5),
  plural2ndPerson: Word('обгораете', 5),
  plural3rdPerson: Word('обгорают', 5),
  masculinePast: Word('обгорал', 5),
  femininePast: Word('обгорала', 5),
  neuterPast: Word('обгорало', 5),
  pluralPast: Word('обгорали', 5),
  imperativeInformal: Word('обгорай', 5),
  imperativeFormal: Word('обгорайте', 5),
  imperfect: [],
};

perfectVerbs.set(обгорать.name.text, обгорать);

export { обгорать };