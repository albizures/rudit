import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крякать: PerfectVerb = {
  name: Word('крякать', 2),
  singular1stPerson: Word('крякаю', 2),
  singular2ndPerson: Word('крякаешь', 2),
  singular3rdPerson: Word('крякает', 2),
  plural1stPerson: Word('крякаем', 2),
  plural2ndPerson: Word('крякаете', 2),
  plural3rdPerson: Word('крякают', 2),
  masculinePast: Word('крякал', 2),
  femininePast: Word('крякала', 2),
  neuterPast: Word('крякало', 2),
  pluralPast: Word('крякали', 2),
  imperativeInformal: Word('крякай', 2),
  imperativeFormal: Word('крякайте', 2),
  imperfect: ['крякнуть'],
};

perfectVerbs.set(крякать.name.text, крякать);

export { крякать };