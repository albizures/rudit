import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгорать: PerfectVerb = {
  name: Word('выгорать', 5),
  singular1stPerson: Word('выгораю', 5),
  singular2ndPerson: Word('выгораешь', 5),
  singular3rdPerson: Word('выгорает', 5),
  plural1stPerson: Word('выгораем', 5),
  plural2ndPerson: Word('выгораете', 5),
  plural3rdPerson: Word('выгорают', 5),
  masculinePast: Word('выгорал', 5),
  femininePast: Word('выгорала', 5),
  neuterPast: Word('выгорало', 5),
  pluralPast: Word('выгорали', 5),
  imperativeInformal: Word('выгорай', 5),
  imperativeFormal: Word('выгорайте', 5),
  imperfect: [],
};

perfectVerbs.set(выгорать.name.text, выгорать);

export { выгорать };