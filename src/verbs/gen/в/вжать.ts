import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вжать: PerfectVerb = {
  name: Word('вжать', 2),
  singular1stPerson: Word('вожму', 4),
  singular2ndPerson: Word('вожмёшь', 1),
  singular3rdPerson: Word('вожмёт', 1),
  plural1stPerson: Word('вожмём', 1),
  plural2ndPerson: Word('вожмёте', 6),
  plural3rdPerson: Word('вожмут', 4),
  masculinePast: Word('вжал', 2),
  femininePast: Word('вжала', 2),
  neuterPast: Word('вжало', 2),
  pluralPast: Word('вжали', 2),
  imperativeInformal: Word('вожми', 4),
  imperativeFormal: Word('вожмите', 4),
  imperfect: [],
};

perfectVerbs.set(вжать.name.text, вжать);

export { вжать };