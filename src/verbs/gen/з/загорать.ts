import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загорать: PerfectVerb = {
  name: Word('загорать', 5),
  singular1stPerson: Word('загораю', 5),
  singular2ndPerson: Word('загораешь', 5),
  singular3rdPerson: Word('загорает', 5),
  plural1stPerson: Word('загораем', 5),
  plural2ndPerson: Word('загораете', 5),
  plural3rdPerson: Word('загорают', 5),
  masculinePast: Word('загорал', 5),
  femininePast: Word('загорала', 5),
  neuterPast: Word('загорало', 5),
  pluralPast: Word('загорали', 5),
  imperativeInformal: Word('загорай', 5),
  imperativeFormal: Word('загорайте', 5),
  imperfect: ['загореть'],
};

perfectVerbs.set(загорать.name.text, загорать);

export { загорать };