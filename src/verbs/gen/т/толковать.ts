import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const толковать: PerfectVerb = {
  name: Word('толковать', 6),
  singular1stPerson: Word('толкую', 4),
  singular2ndPerson: Word('толкуешь', 4),
  singular3rdPerson: Word('толкует', 4),
  plural1stPerson: Word('толкуем', 4),
  plural2ndPerson: Word('толкуете', 4),
  plural3rdPerson: Word('толкуют', 4),
  masculinePast: Word('толковал', 6),
  femininePast: Word('толковала', 6),
  neuterPast: Word('толковало', 6),
  pluralPast: Word('толковали', 6),
  imperativeInformal: Word('толкуй', 4),
  imperativeFormal: Word('толкуйте', 4),
  imperfect: ['истолковать','потолковать'],
};

perfectVerbs.set(толковать.name.text, толковать);

export { толковать };