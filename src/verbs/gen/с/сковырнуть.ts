import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сковырнуть: PerfectVerb = {
  name: Word('сковырнуть', 7),
  singular1stPerson: Word('сковырну', 7),
  singular2ndPerson: Word('сковырнёшь', 7),
  singular3rdPerson: Word('сковырнёт', 7),
  plural1stPerson: Word('сковырнём', 7),
  plural2ndPerson: Word('сковырнёте', 7),
  plural3rdPerson: Word('сковырнут', 7),
  masculinePast: Word('сковырнул', 7),
  femininePast: Word('сковырнула', 7),
  neuterPast: Word('сковырнуло', 7),
  pluralPast: Word('сковырнули', 7),
  imperativeInformal: Word('сковырни', 7),
  imperativeFormal: Word('сковырните', 7),
  imperfect: [],
};

perfectVerbs.set(сковырнуть.name.text, сковырнуть);

export { сковырнуть };