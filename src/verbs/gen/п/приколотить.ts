import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приколотить: PerfectVerb = {
  name: Word('приколотить', 8),
  singular1stPerson: Word('приколочу', 8),
  singular2ndPerson: Word('приколотишь', 6),
  singular3rdPerson: Word('приколотит', 6),
  plural1stPerson: Word('приколотим', 6),
  plural2ndPerson: Word('приколотите', 6),
  plural3rdPerson: Word('приколотят', 6),
  masculinePast: Word('приколотил', 8),
  femininePast: Word('приколотила', 8),
  neuterPast: Word('приколотило', 8),
  pluralPast: Word('приколотили', 8),
  imperativeInformal: Word('приколоти', 8),
  imperativeFormal: Word('приколотите', 8),
  imperfect: [],
};

perfectVerbs.set(приколотить.name.text, приколотить);

export { приколотить };