import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подковать: PerfectVerb = {
  name: Word('подковать', 6),
  singular1stPerson: Word('подкую', 5),
  singular2ndPerson: Word('подкуёшь', 5),
  singular3rdPerson: Word('подкуёт', 5),
  plural1stPerson: Word('подкуём', 5),
  plural2ndPerson: Word('подкуёте', 5),
  plural3rdPerson: Word('подкуют', 5),
  masculinePast: Word('подковал', 6),
  femininePast: Word('подковала', 6),
  neuterPast: Word('подковало', 6),
  pluralPast: Word('подковали', 6),
  imperativeInformal: Word('подкуй', 4),
  imperativeFormal: Word('подкуйте', 4),
  imperfect: ['подковывать','ковать'],
};

perfectVerbs.set(подковать.name.text, подковать);

export { подковать };