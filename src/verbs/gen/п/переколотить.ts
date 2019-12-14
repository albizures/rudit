import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переколотить: PerfectVerb = {
  name: Word('переколотить', 9),
  singular1stPerson: Word('переколочу', 9),
  singular2ndPerson: Word('переколотишь', 7),
  singular3rdPerson: Word('переколотит', 7),
  plural1stPerson: Word('переколотим', 7),
  plural2ndPerson: Word('переколотите', 7),
  plural3rdPerson: Word('переколотят', 7),
  masculinePast: Word('переколотил', 9),
  femininePast: Word('переколотила', 9),
  neuterPast: Word('переколотило', 9),
  pluralPast: Word('переколотили', 9),
  imperativeInformal: Word('переколоти', 9),
  imperativeFormal: Word('переколотите', 9),
  imperfect: [],
};

perfectVerbs.set(переколотить.name.text, переколотить);

export { переколотить };