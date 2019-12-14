import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашинковать: PerfectVerb = {
  name: Word('нашинковать', 8),
  singular1stPerson: Word('нашинкую', 6),
  singular2ndPerson: Word('нашинкуешь', 6),
  singular3rdPerson: Word('нашинкует', 6),
  plural1stPerson: Word('нашинкуем', 6),
  plural2ndPerson: Word('нашинкуете', 6),
  plural3rdPerson: Word('нашинкуют', 6),
  masculinePast: Word('нашинковал', 8),
  femininePast: Word('нашинковала', 8),
  neuterPast: Word('нашинковало', 8),
  pluralPast: Word('нашинковали', 8),
  imperativeInformal: Word('нашинкуй', 6),
  imperativeFormal: Word('нашинкуйте', 6),
  imperfect: [],
};

perfectVerbs.set(нашинковать.name.text, нашинковать);

export { нашинковать };