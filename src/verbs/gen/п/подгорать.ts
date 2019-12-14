import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгорать: PerfectVerb = {
  name: Word('подгорать', 6),
  singular1stPerson: Word('подгораю', 6),
  singular2ndPerson: Word('подгораешь', 6),
  singular3rdPerson: Word('подгорает', 6),
  plural1stPerson: Word('подгораем', 6),
  plural2ndPerson: Word('подгораете', 6),
  plural3rdPerson: Word('подгорают', 6),
  masculinePast: Word('подгорал', 6),
  femininePast: Word('подгорала', 6),
  neuterPast: Word('подгорало', 6),
  pluralPast: Word('подгорали', 6),
  imperativeInformal: Word('подгорай', 6),
  imperativeFormal: Word('подгорайте', 6),
  imperfect: [],
};

perfectVerbs.set(подгорать.name.text, подгорать);

export { подгорать };