import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сколотить: PerfectVerb = {
  name: Word('сколотить', 6),
  singular1stPerson: Word('сколочу', 6),
  singular2ndPerson: Word('сколотишь', 4),
  singular3rdPerson: Word('сколотит', 4),
  plural1stPerson: Word('сколотим', 4),
  plural2ndPerson: Word('сколотите', 4),
  plural3rdPerson: Word('сколотят', 4),
  masculinePast: Word('сколотил', 6),
  femininePast: Word('сколотила', 6),
  neuterPast: Word('сколотило', 6),
  pluralPast: Word('сколотили', 6),
  imperativeInformal: Word('сколоти', 6),
  imperativeFormal: Word('сколотите', 6),
  imperfect: [],
};

perfectVerbs.set(сколотить.name.text, сколотить);

export { сколотить };