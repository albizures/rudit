import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спихнуть: PerfectVerb = {
  name: Word('спихнуть', 5),
  singular1stPerson: Word('спихну', 5),
  singular2ndPerson: Word('спихнёшь', 2),
  singular3rdPerson: Word('спихнёт', 2),
  plural1stPerson: Word('спихнём', 2),
  plural2ndPerson: Word('спихнёте', 7),
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