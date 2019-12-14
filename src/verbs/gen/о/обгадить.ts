import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обгадить: PerfectVerb = {
  name: Word('обгадить', 3),
  singular1stPerson: Word('обгажу', 3),
  singular2ndPerson: Word('обгадишь', 3),
  singular3rdPerson: Word('обгадит', 3),
  plural1stPerson: Word('обгадим', 3),
  plural2ndPerson: Word('обгадите', 3),
  plural3rdPerson: Word('обгадят', 3),
  masculinePast: Word('обгадил', 3),
  femininePast: Word('обгадила', 3),
  neuterPast: Word('обгадило', 3),
  pluralPast: Word('обгадили', 3),
  imperativeInformal: Word('обгадь', 3),
  imperativeFormal: Word('обгадьте', 3),
  imperfect: [],
};

perfectVerbs.set(обгадить.name.text, обгадить);

export { обгадить };