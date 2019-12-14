import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поколотить: PerfectVerb = {
  name: Word('поколотить', 7),
  singular1stPerson: Word('поколочу', 7),
  singular2ndPerson: Word('поколотишь', 5),
  singular3rdPerson: Word('поколотит', 5),
  plural1stPerson: Word('поколотим', 5),
  plural2ndPerson: Word('поколотите', 5),
  plural3rdPerson: Word('поколотят', 5),
  masculinePast: Word('поколотил', 7),
  femininePast: Word('поколотила', 7),
  neuterPast: Word('поколотило', 7),
  pluralPast: Word('поколотили', 7),
  imperativeInformal: Word('поколоти', 7),
  imperativeFormal: Word('поколотите', 7),
  imperfect: [],
};

perfectVerbs.set(поколотить.name.text, поколотить);

export { поколотить };