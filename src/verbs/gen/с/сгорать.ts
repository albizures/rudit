import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгорать: PerfectVerb = {
  name: Word('сгорать', 4),
  singular1stPerson: Word('сгораю', 4),
  singular2ndPerson: Word('сгораешь', 4),
  singular3rdPerson: Word('сгорает', 4),
  plural1stPerson: Word('сгораем', 4),
  plural2ndPerson: Word('сгораете', 4),
  plural3rdPerson: Word('сгорают', 4),
  masculinePast: Word('сгорал', 4),
  femininePast: Word('сгорала', 4),
  neuterPast: Word('сгорало', 4),
  pluralPast: Word('сгорали', 4),
  imperativeInformal: Word('сгорай', 4),
  imperativeFormal: Word('сгорайте', 4),
  imperfect: [],
};

perfectVerbs.set(сгорать.name.text, сгорать);

export { сгорать };