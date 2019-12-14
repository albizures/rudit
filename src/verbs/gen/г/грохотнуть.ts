import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грохотнуть: PerfectVerb = {
  name: Word('грохотнуть', 7),
  singular1stPerson: Word('грохотну', 7),
  singular2ndPerson: Word('грохотнёшь', 7),
  singular3rdPerson: Word('грохотнёт', 7),
  plural1stPerson: Word('грохотнём', 7),
  plural2ndPerson: Word('грохотнёте', 7),
  plural3rdPerson: Word('грохотнут', 7),
  masculinePast: Word('грохотнул', 7),
  femininePast: Word('грохотнула', 7),
  neuterPast: Word('грохотнуло', 7),
  pluralPast: Word('грохотнули', 7),
  imperativeInformal: Word('грохотни', 7),
  imperativeFormal: Word('грохотните', 7),
  imperfect: [],
};

perfectVerbs.set(грохотнуть.name.text, грохотнуть);

export { грохотнуть };