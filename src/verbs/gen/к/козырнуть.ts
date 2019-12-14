import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const козырнуть: PerfectVerb = {
  name: Word('козырнуть', 6),
  singular1stPerson: Word('козырну', 6),
  singular2ndPerson: Word('козырнёшь', 6),
  singular3rdPerson: Word('козырнёт', 6),
  plural1stPerson: Word('козырнём', 6),
  plural2ndPerson: Word('козырнёте', 6),
  plural3rdPerson: Word('козырнут', 6),
  masculinePast: Word('козырнул', 6),
  femininePast: Word('козырнула', 6),
  neuterPast: Word('козырнуло', 6),
  pluralPast: Word('козырнули', 6),
  imperativeInformal: Word('козырни', 6),
  imperativeFormal: Word('козырните', 6),
  imperfect: [],
};

perfectVerbs.set(козырнуть.name.text, козырнуть);

export { козырнуть };