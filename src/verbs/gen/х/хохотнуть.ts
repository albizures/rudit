import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хохотнуть: PerfectVerb = {
  name: Word('хохотнуть', 6),
  singular1stPerson: Word('хохотну', 6),
  singular2ndPerson: Word('хохотнёшь', 6),
  singular3rdPerson: Word('хохотнёт', 6),
  plural1stPerson: Word('хохотнём', 6),
  plural2ndPerson: Word('хохотнёте', 6),
  plural3rdPerson: Word('хохотнут', 6),
  masculinePast: Word('хохотнул', 6),
  femininePast: Word('хохотнула', 6),
  neuterPast: Word('хохотнуло', 6),
  pluralPast: Word('хохотнули', 6),
  imperativeInformal: Word('хохотни', 6),
  imperativeFormal: Word('хохотните', 6),
  imperfect: ['хохотать'],
};

perfectVerbs.set(хохотнуть.name.text, хохотнуть);

export { хохотнуть };