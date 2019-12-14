import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рискнуть: PerfectVerb = {
  name: Word('рискнуть', 5),
  singular1stPerson: Word('рискну', 5),
  singular2ndPerson: Word('рискнёшь', 1),
  singular3rdPerson: Word('рискнёт', 1),
  plural1stPerson: Word('рискнём', 1),
  plural2ndPerson: Word('рискнёте', 7),
  plural3rdPerson: Word('рискнут', 5),
  masculinePast: Word('рискнул', 5),
  femininePast: Word('рискнула', 5),
  neuterPast: Word('рискнуло', 5),
  pluralPast: Word('рискнули', 5),
  imperativeInformal: Word('рискни', 5),
  imperativeFormal: Word('рискните', 5),
  imperfect: ['рисковать'],
};

perfectVerbs.set(рискнуть.name.text, рискнуть);

export { рискнуть };