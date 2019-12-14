import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чихнуть: PerfectVerb = {
  name: Word('чихнуть', 4),
  singular1stPerson: Word('чихну', 4),
  singular2ndPerson: Word('чихнёшь', 4),
  singular3rdPerson: Word('чихнёт', 4),
  plural1stPerson: Word('чихнём', 4),
  plural2ndPerson: Word('чихнёте', 4),
  plural3rdPerson: Word('чихнут', 4),
  masculinePast: Word('чихнул', 4),
  femininePast: Word('чихнула', 4),
  neuterPast: Word('чихнуло', 4),
  pluralPast: Word('чихнули', 4),
  imperativeInformal: Word('чихни', 4),
  imperativeFormal: Word('чихните', 4),
  imperfect: ['чихать'],
};

perfectVerbs.set(чихнуть.name.text, чихнуть);

export { чихнуть };