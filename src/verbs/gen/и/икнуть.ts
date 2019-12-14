import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const икнуть: PerfectVerb = {
  name: Word('икнуть', 3),
  singular1stPerson: Word('икну', 3),
  singular2ndPerson: Word('икнёшь', 0),
  singular3rdPerson: Word('икнёт', 0),
  plural1stPerson: Word('икнём', 0),
  plural2ndPerson: Word('икнёте', 5),
  plural3rdPerson: Word('икнут', 3),
  masculinePast: Word('икнул', 3),
  femininePast: Word('икнула', 3),
  neuterPast: Word('икнуло', 3),
  pluralPast: Word('икнули', 3),
  imperativeInformal: Word('икни', 3),
  imperativeFormal: Word('икните', 3),
  imperfect: ['икать'],
};

perfectVerbs.set(икнуть.name.text, икнуть);

export { икнуть };