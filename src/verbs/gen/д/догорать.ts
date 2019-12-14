import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const догорать: PerfectVerb = {
  name: Word('догорать', 5),
  singular1stPerson: Word('догораю', 5),
  singular2ndPerson: Word('догораешь', 5),
  singular3rdPerson: Word('догорает', 5),
  plural1stPerson: Word('догораем', 5),
  plural2ndPerson: Word('догораете', 5),
  plural3rdPerson: Word('догорают', 5),
  masculinePast: Word('догорал', 5),
  femininePast: Word('догорала', 5),
  neuterPast: Word('догорало', 5),
  pluralPast: Word('догорали', 5),
  imperativeInformal: Word('догорай', 5),
  imperativeFormal: Word('догорайте', 5),
  imperfect: [],
};

perfectVerbs.set(догорать.name.text, догорать);

export { догорать };