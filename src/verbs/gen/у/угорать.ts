import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угорать: PerfectVerb = {
  name: Word('угорать', 4),
  singular1stPerson: Word('угораю', 4),
  singular2ndPerson: Word('угораешь', 4),
  singular3rdPerson: Word('угорает', 4),
  plural1stPerson: Word('угораем', 4),
  plural2ndPerson: Word('угораете', 4),
  plural3rdPerson: Word('угорают', 4),
  masculinePast: Word('угорал', 4),
  femininePast: Word('угорала', 4),
  neuterPast: Word('угорало', 4),
  pluralPast: Word('угорали', 4),
  imperativeInformal: Word('угорай', 4),
  imperativeFormal: Word('угорайте', 4),
  imperfect: [],
};

perfectVerbs.set(угорать.name.text, угорать);

export { угорать };