import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выворотить: PerfectVerb = {
  name: Word('выворотить', 1),
  singular1stPerson: Word('выворочу', 1),
  singular2ndPerson: Word('выворотишь', 1),
  singular3rdPerson: Word('выворотит', 1),
  plural1stPerson: Word('выворотим', 1),
  plural2ndPerson: Word('выворотите', 1),
  plural3rdPerson: Word('выворотят', 1),
  masculinePast: Word('выворотил', 1),
  femininePast: Word('выворотила', 1),
  neuterPast: Word('выворотило', 1),
  pluralPast: Word('выворотили', 1),
  imperativeInformal: Word('вывороти', 1),
  imperativeFormal: Word('выворотите', 1),
  imperfect: [],
};

perfectVerbs.set(выворотить.name.text, выворотить);

export { выворотить };