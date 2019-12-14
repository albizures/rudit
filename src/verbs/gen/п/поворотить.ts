import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поворотить: PerfectVerb = {
  name: Word('поворотить', 7),
  singular1stPerson: Word('поворочу', 7),
  singular2ndPerson: Word('поворотишь', 5),
  singular3rdPerson: Word('поворотит', 5),
  plural1stPerson: Word('поворотим', 5),
  plural2ndPerson: Word('поворотите', 5),
  plural3rdPerson: Word('поворотят', 5),
  masculinePast: Word('поворотил', 7),
  femininePast: Word('поворотила', 7),
  neuterPast: Word('поворотило', 7),
  pluralPast: Word('поворотили', 7),
  imperativeInformal: Word('повороти', 7),
  imperativeFormal: Word('поворотите', 7),
  imperfect: [],
};

perfectVerbs.set(поворотить.name.text, поворотить);

export { поворотить };