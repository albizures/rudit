import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const молотить: PerfectVerb = {
  name: Word('молотить', 5),
  singular1stPerson: Word('молочу', 5),
  singular2ndPerson: Word('молотишь', 3),
  singular3rdPerson: Word('молотит', 3),
  plural1stPerson: Word('молотим', 3),
  plural2ndPerson: Word('молотите', 3),
  plural3rdPerson: Word('молотят', 3),
  masculinePast: Word('молотил', 5),
  femininePast: Word('молотила', 5),
  neuterPast: Word('молотило', 5),
  pluralPast: Word('молотили', 5),
  imperativeInformal: Word('молоти', 5),
  imperativeFormal: Word('молотите', 5),
  imperfect: ['обмолотить','намолотить'],
};

perfectVerbs.set(молотить.name.text, молотить);

export { молотить };