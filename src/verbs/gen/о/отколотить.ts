import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отколотить: PerfectVerb = {
  name: Word('отколотить', 7),
  singular1stPerson: Word('отколочу', 7),
  singular2ndPerson: Word('отколотишь', 5),
  singular3rdPerson: Word('отколотит', 5),
  plural1stPerson: Word('отколотим', 5),
  plural2ndPerson: Word('отколотите', 5),
  plural3rdPerson: Word('отколотят', 5),
  masculinePast: Word('отколотил', 7),
  femininePast: Word('отколотила', 7),
  neuterPast: Word('отколотило', 7),
  pluralPast: Word('отколотили', 7),
  imperativeInformal: Word('отколоти', 7),
  imperativeFormal: Word('отколотите', 7),
  imperfect: [],
};

perfectVerbs.set(отколотить.name.text, отколотить);

export { отколотить };