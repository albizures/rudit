import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промолотить: PerfectVerb = {
  name: Word('промолотить', 8),
  singular1stPerson: Word('промолочу', 8),
  singular2ndPerson: Word('промолотишь', 6),
  singular3rdPerson: Word('промолотит', 6),
  plural1stPerson: Word('промолотим', 6),
  plural2ndPerson: Word('промолотите', 6),
  plural3rdPerson: Word('промолотят', 6),
  masculinePast: Word('промолотил', 8),
  femininePast: Word('промолотила', 8),
  neuterPast: Word('промолотило', 8),
  pluralPast: Word('промолотили', 8),
  imperativeInformal: Word('промолоти', 8),
  imperativeFormal: Word('промолотите', 8),
  imperfect: [],
};

perfectVerbs.set(промолотить.name.text, промолотить);

export { промолотить };