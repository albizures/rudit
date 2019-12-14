import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истолковать: PerfectVerb = {
  name: Word('истолковать', 8),
  singular1stPerson: Word('истолкую', 6),
  singular2ndPerson: Word('истолкуешь', 6),
  singular3rdPerson: Word('истолкует', 6),
  plural1stPerson: Word('истолкуем', 6),
  plural2ndPerson: Word('истолкуете', 6),
  plural3rdPerson: Word('истолкуют', 6),
  masculinePast: Word('истолковал', 8),
  femininePast: Word('истолковала', 8),
  neuterPast: Word('истолковало', 8),
  pluralPast: Word('истолковали', 8),
  imperativeInformal: Word('истолкуй', 6),
  imperativeFormal: Word('истолкуйте', 6),
  imperfect: [],
};

perfectVerbs.set(истолковать.name.text, истолковать);

export { истолковать };