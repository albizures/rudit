import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умыкнуть: PerfectVerb = {
  name: Word('умыкнуть', 5),
  singular1stPerson: Word('умыкну', 5),
  singular2ndPerson: Word('умыкнёшь', 5),
  singular3rdPerson: Word('умыкнёт', 5),
  plural1stPerson: Word('умыкнём', 5),
  plural2ndPerson: Word('умыкнёте', 5),
  plural3rdPerson: Word('умыкнут', 5),
  masculinePast: Word('умыкнул', 5),
  femininePast: Word('умыкнула', 5),
  neuterPast: Word('умыкнуло', 5),
  pluralPast: Word('умыкнули', 5),
  imperativeInformal: Word('умыкни', 5),
  imperativeFormal: Word('умыкните', 5),
  imperfect: [],
};

perfectVerbs.set(умыкнуть.name.text, умыкнуть);

export { умыкнуть };