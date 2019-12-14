import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смекнуть: PerfectVerb = {
  name: Word('смекнуть', 5),
  singular1stPerson: Word('смекну', 5),
  singular2ndPerson: Word('смекнёшь', 2),
  singular3rdPerson: Word('смекнёт', 2),
  plural1stPerson: Word('смекнём', 2),
  plural2ndPerson: Word('смекнёте', 2),
  plural3rdPerson: Word('смекнут', 5),
  masculinePast: Word('смекнул', 5),
  femininePast: Word('смекнула', 5),
  neuterPast: Word('смекнуло', 5),
  pluralPast: Word('смекнули', 5),
  imperativeInformal: Word('смекни', 5),
  imperativeFormal: Word('смекните', 5),
  imperfect: [],
};

perfectVerbs.set(смекнуть.name.text, смекнуть);

export { смекнуть };