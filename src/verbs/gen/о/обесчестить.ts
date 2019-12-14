import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обесчестить: PerfectVerb = {
  name: Word('обесчестить', 5),
  singular1stPerson: Word('обесчещу', 5),
  singular2ndPerson: Word('обесчестишь', 5),
  singular3rdPerson: Word('обесчестит', 5),
  plural1stPerson: Word('обесчестим', 5),
  plural2ndPerson: Word('обесчестите', 5),
  plural3rdPerson: Word('обесчестят', 5),
  masculinePast: Word('обесчестил', 5),
  femininePast: Word('обесчестила', 5),
  neuterPast: Word('обесчестило', 5),
  pluralPast: Word('обесчестили', 5),
  imperativeInformal: Word('обесчести//обесче'сть', 5),
  imperativeFormal: Word('обесчестите//обесче'стьте', 5),
  imperfect: [],
};

perfectVerbs.set(обесчестить.name.text, обесчестить);

export { обесчестить };