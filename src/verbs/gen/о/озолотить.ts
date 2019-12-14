import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озолотить: PerfectVerb = {
  name: Word('озолотить', 6),
  singular1stPerson: Word('озолочу', 6),
  singular2ndPerson: Word('озолотишь', 6),
  singular3rdPerson: Word('озолотит', 6),
  plural1stPerson: Word('озолотим', 6),
  plural2ndPerson: Word('озолотите', 6),
  plural3rdPerson: Word('озолотят', 6),
  masculinePast: Word('озолотил', 6),
  femininePast: Word('озолотила', 6),
  neuterPast: Word('озолотило', 6),
  pluralPast: Word('озолотили', 6),
  imperativeInformal: Word('озолоти', 6),
  imperativeFormal: Word('озолотите', 6),
  imperfect: [],
};

perfectVerbs.set(озолотить.name.text, озолотить);

export { озолотить };