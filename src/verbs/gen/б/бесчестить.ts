import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бесчестить: PerfectVerb = {
  name: Word('бесчестить', 4),
  singular1stPerson: Word('бесчещу', 4),
  singular2ndPerson: Word('бесчестишь', 4),
  singular3rdPerson: Word('бесчестит', 4),
  plural1stPerson: Word('бесчестим', 4),
  plural2ndPerson: Word('бесчестите', 4),
  plural3rdPerson: Word('бесчестят', 4),
  masculinePast: Word('бесчестил', 4),
  femininePast: Word('бесчестила', 4),
  neuterPast: Word('бесчестило', 4),
  pluralPast: Word('бесчестили', 4),
  imperativeInformal: Word('бесчести//бесче'сть', 4),
  imperativeFormal: Word('бесчестите//бесче'стьте', 4),
  imperfect: [],
};

perfectVerbs.set(бесчестить.name.text, бесчестить);

export { бесчестить };