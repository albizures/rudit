import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмолотить: PerfectVerb = {
  name: Word('обмолотить', 7),
  singular1stPerson: Word('обмолочу', 7),
  singular2ndPerson: Word('обмолотишь', 5),
  singular3rdPerson: Word('обмолотит', 5),
  plural1stPerson: Word('обмолотим', 5),
  plural2ndPerson: Word('обмолотите', 5),
  plural3rdPerson: Word('обмолотят', 5),
  masculinePast: Word('обмолотил', 7),
  femininePast: Word('обмолотила', 7),
  neuterPast: Word('обмолотило', 7),
  pluralPast: Word('обмолотили', 7),
  imperativeInformal: Word('обмолоти', 7),
  imperativeFormal: Word('обмолотите', 7),
  imperfect: [],
};

perfectVerbs.set(обмолотить.name.text, обмолотить);

export { обмолотить };