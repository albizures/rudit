import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмолотить: PerfectVerb = {
  name: Word('отмолотить', 7),
  singular1stPerson: Word('отмолочу', 7),
  singular2ndPerson: Word('отмолотишь', 5),
  singular3rdPerson: Word('отмолотит', 5),
  plural1stPerson: Word('отмолотим', 5),
  plural2ndPerson: Word('отмолотите', 5),
  plural3rdPerson: Word('отмолотят', 5),
  masculinePast: Word('отмолотил', 7),
  femininePast: Word('отмолотила', 7),
  neuterPast: Word('отмолотило', 7),
  pluralPast: Word('отмолотили', 7),
  imperativeInformal: Word('отмолоти', 7),
  imperativeFormal: Word('отмолотите', 7),
  imperfect: [],
};

perfectVerbs.set(отмолотить.name.text, отмолотить);

export { отмолотить };