import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вколотить: PerfectVerb = {
  name: Word('вколотить', 6),
  singular1stPerson: Word('вколочу', 6),
  singular2ndPerson: Word('вколотишь', 4),
  singular3rdPerson: Word('вколотит', 4),
  plural1stPerson: Word('вколотим', 4),
  plural2ndPerson: Word('вколотите', 4),
  plural3rdPerson: Word('вколотят', 4),
  masculinePast: Word('вколотил', 6),
  femininePast: Word('вколотила', 6),
  neuterPast: Word('вколотило', 6),
  pluralPast: Word('вколотили', 6),
  imperativeInformal: Word('вколоти', 6),
  imperativeFormal: Word('вколотите', 6),
  imperfect: [],
};

perfectVerbs.set(вколотить.name.text, вколотить);

export { вколотить };