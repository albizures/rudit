import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мертветь: PerfectVerb = {
  name: Word('мертветь', 5),
  singular1stPerson: Word('мертвею', 5),
  singular2ndPerson: Word('мертвеешь', 5),
  singular3rdPerson: Word('мертвеет', 5),
  plural1stPerson: Word('мертвеем', 5),
  plural2ndPerson: Word('мертвеете', 5),
  plural3rdPerson: Word('мертвеют', 5),
  masculinePast: Word('мертвел', 5),
  femininePast: Word('мертвела', 5),
  neuterPast: Word('мертвело', 5),
  pluralPast: Word('мертвели', 5),
  imperativeInformal: Word('мертвей', 5),
  imperativeFormal: Word('мертвейте', 5),
  imperfect: [],
};

perfectVerbs.set(мертветь.name.text, мертветь);

export { мертветь };