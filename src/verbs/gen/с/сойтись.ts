import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сойтись: PerfectVerb = {
  name: Word('сойтись', 4),
  singular1stPerson: Word('сойдусь', 4),
  singular2ndPerson: Word('сойдёшься', 4),
  singular3rdPerson: Word('сойдётся', 4),
  plural1stPerson: Word('сойдёмся', 4),
  plural2ndPerson: Word('сойдётесь', 4),
  plural3rdPerson: Word('сойдутся', 4),
  masculinePast: Word('сошёлся', 3),
  femininePast: Word('сошлась', 4),
  neuterPast: Word('сошлось', 4),
  pluralPast: Word('сошлись', 4),
  imperativeInformal: Word('сойдись', 4),
  imperativeFormal: Word('сойдитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сойтись.name.text, сойтись);

export { сойтись };