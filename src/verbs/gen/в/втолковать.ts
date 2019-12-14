import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втолковать: PerfectVerb = {
  name: Word('втолковать', 7),
  singular1stPerson: Word('втолкую', 5),
  singular2ndPerson: Word('втолкуешь', 5),
  singular3rdPerson: Word('втолкует', 5),
  plural1stPerson: Word('втолкуем', 5),
  plural2ndPerson: Word('втолкуете', 5),
  plural3rdPerson: Word('втолкуют', 5),
  masculinePast: Word('втолковал', 7),
  femininePast: Word('втолковала', 7),
  neuterPast: Word('втолковало', 7),
  pluralPast: Word('втолковали', 7),
  imperativeInformal: Word('втолкуй', 5),
  imperativeFormal: Word('втолкуйте', 5),
  imperfect: [],
};

perfectVerbs.set(втолковать.name.text, втолковать);

export { втолковать };