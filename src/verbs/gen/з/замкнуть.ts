import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замкнуть: PerfectVerb = {
  name: Word('замкнуть', 5),
  singular1stPerson: Word('замкну', 5),
  singular2ndPerson: Word('замкнёшь', 5),
  singular3rdPerson: Word('замкнёт', 5),
  plural1stPerson: Word('замкнём', 5),
  plural2ndPerson: Word('замкнёте', 5),
  plural3rdPerson: Word('замкнут', 5),
  masculinePast: Word('замкнул', 5),
  femininePast: Word('замкнула', 5),
  neuterPast: Word('замкнуло', 5),
  pluralPast: Word('замкнули', 5),
  imperativeInformal: Word('замкни', 5),
  imperativeFormal: Word('замкните', 5),
  imperfect: [],
};

perfectVerbs.set(замкнуть.name.text, замкнуть);

export { замкнуть };