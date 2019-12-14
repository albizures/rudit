import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагорать: PerfectVerb = {
  name: Word('нагорать', 5),
  singular1stPerson: Word('нагораю', 5),
  singular2ndPerson: Word('нагораешь', 5),
  singular3rdPerson: Word('нагорает', 5),
  plural1stPerson: Word('нагораем', 5),
  plural2ndPerson: Word('нагораете', 5),
  plural3rdPerson: Word('нагорают', 5),
  masculinePast: Word('нагорал', 5),
  femininePast: Word('нагорала', 5),
  neuterPast: Word('нагорало', 5),
  pluralPast: Word('нагорали', 5),
  imperativeInformal: Word('нагорай', 5),
  imperativeFormal: Word('нагорайте', 5),
  imperfect: [],
};

perfectVerbs.set(нагорать.name.text, нагорать);

export { нагорать };