import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вильнуть: PerfectVerb = {
  name: Word('вильнуть', 5),
  singular1stPerson: Word('вильну', 5),
  singular2ndPerson: Word('вильнёшь', 5),
  singular3rdPerson: Word('вильнёт', 5),
  plural1stPerson: Word('вильнём', 5),
  plural2ndPerson: Word('вильнёте', 5),
  plural3rdPerson: Word('вильнут', 5),
  masculinePast: Word('вильнул', 5),
  femininePast: Word('вильнула', 5),
  neuterPast: Word('вильнуло', 5),
  pluralPast: Word('вильнули', 5),
  imperativeInformal: Word('вильни', 5),
  imperativeFormal: Word('вильните', 5),
  imperfect: [],
};

perfectVerbs.set(вильнуть.name.text, вильнуть);

export { вильнуть };