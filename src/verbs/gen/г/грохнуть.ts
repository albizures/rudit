import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грохнуть: PerfectVerb = {
  name: Word('грохнуть', 2),
  singular1stPerson: Word('грохну', 2),
  singular2ndPerson: Word('грохнешь', 2),
  singular3rdPerson: Word('грохнет', 2),
  plural1stPerson: Word('грохнем', 2),
  plural2ndPerson: Word('грохнете', 2),
  plural3rdPerson: Word('грохнут', 2),
  masculinePast: Word('грохнул', 2),
  femininePast: Word('грохнула', 2),
  neuterPast: Word('грохнуло', 2),
  pluralPast: Word('грохнули', 2),
  imperativeInformal: Word('грохни', 2),
  imperativeFormal: Word('грохните', 2),
  imperfect: [],
};

perfectVerbs.set(грохнуть.name.text, грохнуть);

export { грохнуть };