import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетолковать: PerfectVerb = {
  name: Word('перетолковать', 10),
  singular1stPerson: Word('перетолкую', 8),
  singular2ndPerson: Word('перетолкуешь', 8),
  singular3rdPerson: Word('перетолкует', 8),
  plural1stPerson: Word('перетолкуем', 8),
  plural2ndPerson: Word('перетолкуете', 8),
  plural3rdPerson: Word('перетолкуют', 8),
  masculinePast: Word('перетолковал', 10),
  femininePast: Word('перетолковала', 10),
  neuterPast: Word('перетолковало', 10),
  pluralPast: Word('перетолковали', 10),
  imperativeInformal: Word('перетолкуй', 8),
  imperativeFormal: Word('перетолкуйте', 8),
  imperfect: [],
};

perfectVerbs.set(перетолковать.name.text, перетолковать);

export { перетолковать };