import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помертветь: PerfectVerb = {
  name: Word('помертветь', 7),
  singular1stPerson: Word('помертвею', 7),
  singular2ndPerson: Word('помертвеешь', 7),
  singular3rdPerson: Word('помертвеет', 7),
  plural1stPerson: Word('помертвеем', 7),
  plural2ndPerson: Word('помертвеете', 7),
  plural3rdPerson: Word('помертвеют', 7),
  masculinePast: Word('помертвел', 7),
  femininePast: Word('помертвела', 7),
  neuterPast: Word('помертвело', 7),
  pluralPast: Word('помертвели', 7),
  imperativeInformal: Word('помертвей', 7),
  imperativeFormal: Word('помертвейте', 7),
  imperfect: [],
};

perfectVerbs.set(помертветь.name.text, помертветь);

export { помертветь };