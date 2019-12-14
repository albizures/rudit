import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const льнуть: PerfectVerb = {
  name: Word('льнуть', 3),
  singular1stPerson: Word('льну', 3),
  singular2ndPerson: Word('льнёшь', 3),
  singular3rdPerson: Word('льнёт', 3),
  plural1stPerson: Word('льнём', 3),
  plural2ndPerson: Word('льнёте', 3),
  plural3rdPerson: Word('льнут', 3),
  masculinePast: Word('льнул', 3),
  femininePast: Word('льнула', 3),
  neuterPast: Word('льнуло', 3),
  pluralPast: Word('льнули', 3),
  imperativeInformal: Word('льни', 3),
  imperativeFormal: Word('льните', 3),
  imperfect: [],
};

perfectVerbs.set(льнуть.name.text, льнуть);

export { льнуть };