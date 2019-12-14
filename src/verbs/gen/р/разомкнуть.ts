import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разомкнуть: PerfectVerb = {
  name: Word('разомкнуть', 7),
  singular1stPerson: Word('разомкну', 7),
  singular2ndPerson: Word('разомкнёшь', 1),
  singular3rdPerson: Word('разомкнёт', 1),
  plural1stPerson: Word('разомкнём', 1),
  plural2ndPerson: Word('разомкнёте', 1),
  plural3rdPerson: Word('разомкнут', 7),
  masculinePast: Word('разомкнул', 7),
  femininePast: Word('разомкнула', 7),
  neuterPast: Word('разомкнуло', 7),
  pluralPast: Word('разомкнули', 7),
  imperativeInformal: Word('разомкни', 7),
  imperativeFormal: Word('разомкните', 7),
  imperfect: [],
};

perfectVerbs.set(разомкнуть.name.text, разомкнуть);

export { разомкнуть };