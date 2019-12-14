import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колотить: PerfectVerb = {
  name: Word('колотить', 5),
  singular1stPerson: Word('колочу', 5),
  singular2ndPerson: Word('колотишь', 3),
  singular3rdPerson: Word('колотит', 3),
  plural1stPerson: Word('колотим', 3),
  plural2ndPerson: Word('колотите', 3),
  plural3rdPerson: Word('колотят', 3),
  masculinePast: Word('колотил', 5),
  femininePast: Word('колотила', 5),
  neuterPast: Word('колотило', 5),
  pluralPast: Word('колотили', 5),
  imperativeInformal: Word('колоти', 5),
  imperativeFormal: Word('колотите', 5),
  imperfect: [],
};

perfectVerbs.set(колотить.name.text, колотить);

export { колотить };