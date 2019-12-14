import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разомлеть: PerfectVerb = {
  name: Word('разомлеть', 6),
  singular1stPerson: Word('разомлею', 6),
  singular2ndPerson: Word('разомлеешь', 6),
  singular3rdPerson: Word('разомлеет', 6),
  plural1stPerson: Word('разомлеем', 6),
  plural2ndPerson: Word('разомлеете', 6),
  plural3rdPerson: Word('разомлеют', 6),
  masculinePast: Word('разомлел', 6),
  femininePast: Word('разомлела', 6),
  neuterPast: Word('разомлело', 6),
  pluralPast: Word('разомлели', 6),
  imperativeInformal: Word('разомлей', 6),
  imperativeFormal: Word('разомлейте', 6),
  imperfect: [],
};

perfectVerbs.set(разомлеть.name.text, разомлеть);

export { разомлеть };