import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мотнуть: PerfectVerb = {
  name: Word('мотнуть', 4),
  singular1stPerson: Word('мотну', 4),
  singular2ndPerson: Word('мотнёшь', 4),
  singular3rdPerson: Word('мотнёт', 4),
  plural1stPerson: Word('мотнём', 4),
  plural2ndPerson: Word('мотнёте', 4),
  plural3rdPerson: Word('мотнут', 4),
  masculinePast: Word('мотнул', 4),
  femininePast: Word('мотнула', 4),
  neuterPast: Word('мотнуло', 4),
  pluralPast: Word('мотнули', 4),
  imperativeInformal: Word('мотни', 4),
  imperativeFormal: Word('мотните', 4),
  imperfect: [],
};

perfectVerbs.set(мотнуть.name.text, мотнуть);

export { мотнуть };