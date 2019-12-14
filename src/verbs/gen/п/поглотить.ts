import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглотить: PerfectVerb = {
  name: Word('поглотить', 6),
  singular1stPerson: Word('поглощу', 6),
  singular2ndPerson: Word('поглотишь', 4),
  singular3rdPerson: Word('поглотит', 4),
  plural1stPerson: Word('поглотим', 4),
  plural2ndPerson: Word('поглотите', 4),
  plural3rdPerson: Word('поглотят', 4),
  masculinePast: Word('поглотил', 6),
  femininePast: Word('поглотила', 6),
  neuterPast: Word('поглотило', 6),
  pluralPast: Word('поглотили', 6),
  imperativeInformal: Word('поглоти', 6),
  imperativeFormal: Word('поглотите', 6),
  imperfect: ['поглощать'],
};

perfectVerbs.set(поглотить.name.text, поглотить);

export { поглотить };