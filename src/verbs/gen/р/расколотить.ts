import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расколотить: PerfectVerb = {
  name: Word('расколотить', 8),
  singular1stPerson: Word('расколочу', 8),
  singular2ndPerson: Word('расколотишь', 6),
  singular3rdPerson: Word('расколотит', 6),
  plural1stPerson: Word('расколотим', 6),
  plural2ndPerson: Word('расколотите', 6),
  plural3rdPerson: Word('расколотят', 6),
  masculinePast: Word('расколотил', 8),
  femininePast: Word('расколотила', 8),
  neuterPast: Word('расколотило', 8),
  pluralPast: Word('расколотили', 8),
  imperativeInformal: Word('расколоти', 8),
  imperativeFormal: Word('расколотите', 8),
  imperfect: [],
};

perfectVerbs.set(расколотить.name.text, расколотить);

export { расколотить };