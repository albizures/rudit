import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сойти: PerfectVerb = {
  name: Word('сойти', 4),
  singular1stPerson: Word('сойду', 4),
  singular2ndPerson: Word('сойдёшь', 1),
  singular3rdPerson: Word('сойдёт', 1),
  plural1stPerson: Word('сойдём', 1),
  plural2ndPerson: Word('сойдёте', 6),
  plural3rdPerson: Word('сойдут', 4),
  masculinePast: Word('сошёл', 1),
  femininePast: Word('сошла', 4),
  neuterPast: Word('сошло', 4),
  pluralPast: Word('сошли', 4),
  imperativeInformal: Word('сойди', 4),
  imperativeFormal: Word('сойдите', 4),
  imperfect: ['сходить'],
};

perfectVerbs.set(сойти.name.text, сойти);

export { сойти };