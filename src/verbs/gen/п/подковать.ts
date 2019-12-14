import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подковать: PerfectVerb = {
  name: Word('подковать', 6),
  singular1stPerson: Word('подкую', 5),
  singular2ndPerson: Word('подкуёшь', 1),
  singular3rdPerson: Word('подкуёт', 1),
  plural1stPerson: Word('подкуём', 1),
  plural2ndPerson: Word('подкуёте', 7),
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