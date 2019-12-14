import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перешагнуть: PerfectVerb = {
  name: Word('перешагнуть', 8),
  singular1stPerson: Word('перешагну', 8),
  singular2ndPerson: Word('перешагнёшь', 5),
  singular3rdPerson: Word('перешагнёт', 5),
  plural1stPerson: Word('перешагнём', 5),
  plural2ndPerson: Word('перешагнёте', 5),
  plural3rdPerson: Word('перешагнут', 8),
  masculinePast: Word('перешагнул', 8),
  femininePast: Word('перешагнула', 8),
  neuterPast: Word('перешагнуло', 8),
  pluralPast: Word('перешагнули', 8),
  imperativeInformal: Word('перешагни', 8),
  imperativeFormal: Word('перешагните', 8),
  imperfect: [],
};

perfectVerbs.set(перешагнуть.name.text, перешагнуть);

export { перешагнуть };