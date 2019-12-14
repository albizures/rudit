import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригорать: PerfectVerb = {
  name: Word('пригорать', 6),
  singular1stPerson: Word('пригораю', 6),
  singular2ndPerson: Word('пригораешь', 6),
  singular3rdPerson: Word('пригорает', 6),
  plural1stPerson: Word('пригораем', 6),
  plural2ndPerson: Word('пригораете', 6),
  plural3rdPerson: Word('пригорают', 6),
  masculinePast: Word('пригорал', 6),
  femininePast: Word('пригорала', 6),
  neuterPast: Word('пригорало', 6),
  pluralPast: Word('пригорали', 6),
  imperativeInformal: Word('пригорай', 6),
  imperativeFormal: Word('пригорайте', 6),
  imperfect: [],
};

perfectVerbs.set(пригорать.name.text, пригорать);

export { пригорать };