import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спихнуть: PerfectVerb = {
  name: Word('спихнуть', 5),
  singular1stPerson: Word('спихну', 5),
  singular2ndPerson: Word('спихнёшь', 5),
  singular3rdPerson: Word('спихнёт', 5),
  plural1stPerson: Word('спихнём', 5),
  plural2ndPerson: Word('спихнёте', 5),
  plural3rdPerson: Word('спихнут', 5),
  masculinePast: Word('спихнул', 5),
  femininePast: Word('спихнула', 5),
  neuterPast: Word('спихнуло', 5),
  pluralPast: Word('спихнули', 5),
  imperativeInformal: Word('спихни', 5),
  imperativeFormal: Word('спихните', 5),
  imperfect: [],
};

perfectVerbs.set(спихнуть.name.text, спихнуть);

export { спихнуть };