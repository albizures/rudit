import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грохотить: PerfectVerb = {
  name: Word('грохотить', 6),
  singular1stPerson: Word('грохочу', 6),
  singular2ndPerson: Word('грохотишь', 6),
  singular3rdPerson: Word('грохотит', 6),
  plural1stPerson: Word('грохотим', 6),
  plural2ndPerson: Word('грохотите', 6),
  plural3rdPerson: Word('грохотят', 6),
  masculinePast: Word('грохотил', 6),
  femininePast: Word('грохотила', 6),
  neuterPast: Word('грохотило', 6),
  pluralPast: Word('грохотили', 6),
  imperativeInformal: Word('грохоти', 6),
  imperativeFormal: Word('грохотите', 6),
  imperfect: [],
};

perfectVerbs.set(грохотить.name.text, грохотить);

export { грохотить };