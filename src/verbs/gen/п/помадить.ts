import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помадить: PerfectVerb = {
  name: Word('помадить', 3),
  singular1stPerson: Word('помажу', 3),
  singular2ndPerson: Word('помадишь', 3),
  singular3rdPerson: Word('помадит', 3),
  plural1stPerson: Word('помадим', 3),
  plural2ndPerson: Word('помадите', 3),
  plural3rdPerson: Word('помадят', 3),
  masculinePast: Word('помадил', 3),
  femininePast: Word('помадила', 3),
  neuterPast: Word('помадило', 3),
  pluralPast: Word('помадили', 3),
  imperativeInformal: Word('помадь', 3),
  imperativeFormal: Word('помадьте', 3),
  imperfect: [],
};

perfectVerbs.set(помадить.name.text, помадить);

export { помадить };