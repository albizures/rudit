import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачерпнуть: PerfectVerb = {
  name: Word('зачерпнуть', 7),
  singular1stPerson: Word('зачерпну', 7),
  singular2ndPerson: Word('зачерпнёшь', 7),
  singular3rdPerson: Word('зачерпнёт', 7),
  plural1stPerson: Word('зачерпнём', 7),
  plural2ndPerson: Word('зачерпнёте', 7),
  plural3rdPerson: Word('зачерпнут', 7),
  masculinePast: Word('зачерпнул', 7),
  femininePast: Word('зачерпнула', 7),
  neuterPast: Word('зачерпнуло', 7),
  pluralPast: Word('зачерпнули', 7),
  imperativeInformal: Word('зачерпни', 7),
  imperativeFormal: Word('зачерпните', 7),
  imperfect: [],
};

perfectVerbs.set(зачерпнуть.name.text, зачерпнуть);

export { зачерпнуть };