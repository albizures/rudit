import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глотнуть: PerfectVerb = {
  name: Word('глотнуть', 5),
  singular1stPerson: Word('глотну', 5),
  singular2ndPerson: Word('глотнёшь', 5),
  singular3rdPerson: Word('глотнёт', 5),
  plural1stPerson: Word('глотнём', 5),
  plural2ndPerson: Word('глотнёте', 5),
  plural3rdPerson: Word('глотнут', 5),
  masculinePast: Word('глотнул', 5),
  femininePast: Word('глотнула', 5),
  neuterPast: Word('глотнуло', 5),
  pluralPast: Word('глотнули', 5),
  imperativeInformal: Word('глотни', 5),
  imperativeFormal: Word('глотните', 5),
  imperfect: [],
};

perfectVerbs.set(глотнуть.name.text, глотнуть);

export { глотнуть };