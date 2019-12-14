import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разворотить: PerfectVerb = {
  name: Word('разворотить', 8),
  singular1stPerson: Word('разворочу', 8),
  singular2ndPerson: Word('разворотишь', 6),
  singular3rdPerson: Word('разворотит', 6),
  plural1stPerson: Word('разворотим', 6),
  plural2ndPerson: Word('разворотите', 6),
  plural3rdPerson: Word('разворотят', 6),
  masculinePast: Word('разворотил', 8),
  femininePast: Word('разворотила', 8),
  neuterPast: Word('разворотило', 8),
  pluralPast: Word('разворотили', 8),
  imperativeInformal: Word('развороти', 8),
  imperativeFormal: Word('разворотите', 8),
  imperfect: [],
};

perfectVerbs.set(разворотить.name.text, разворотить);

export { разворотить };