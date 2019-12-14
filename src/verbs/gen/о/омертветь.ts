import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омертветь: PerfectVerb = {
  name: Word('омертветь', 6),
  singular1stPerson: Word('омертвею', 6),
  singular2ndPerson: Word('омертвеешь', 6),
  singular3rdPerson: Word('омертвеет', 6),
  plural1stPerson: Word('омертвеем', 6),
  plural2ndPerson: Word('омертвеете', 6),
  plural3rdPerson: Word('омертвеют', 6),
  masculinePast: Word('омертвел', 6),
  femininePast: Word('омертвела', 6),
  neuterPast: Word('омертвело', 6),
  pluralPast: Word('омертвели', 6),
  imperativeInformal: Word('омертвей', 6),
  imperativeFormal: Word('омертвейте', 6),
  imperfect: [],
};

perfectVerbs.set(омертветь.name.text, омертветь);

export { омертветь };