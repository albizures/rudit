import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крякнуть: PerfectVerb = {
  name: Word('крякнуть', 2),
  singular1stPerson: Word('крякну', 2),
  singular2ndPerson: Word('крякнешь', 2),
  singular3rdPerson: Word('крякнет', 2),
  plural1stPerson: Word('крякнем', 2),
  plural2ndPerson: Word('крякнете', 2),
  plural3rdPerson: Word('крякнут', 2),
  masculinePast: Word('крякнул', 2),
  femininePast: Word('крякнула', 2),
  neuterPast: Word('крякнуло', 2),
  pluralPast: Word('крякнули', 2),
  imperativeInformal: Word('крякни', 2),
  imperativeFormal: Word('крякните', 2),
  imperfect: [],
};

perfectVerbs.set(крякнуть.name.text, крякнуть);

export { крякнуть };