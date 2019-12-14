import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстроить: PerfectVerb = {
  name: Word('отстроить', 5),
  singular1stPerson: Word('отстрою', 5),
  singular2ndPerson: Word('отстроишь', 5),
  singular3rdPerson: Word('отстроит', 5),
  plural1stPerson: Word('отстроим', 5),
  plural2ndPerson: Word('отстроите', 5),
  plural3rdPerson: Word('отстроят', 5),
  masculinePast: Word('отстроил', 5),
  femininePast: Word('отстроила', 5),
  neuterPast: Word('отстроило', 5),
  pluralPast: Word('отстроили', 5),
  imperativeInformal: Word('отстрой', 5),
  imperativeFormal: Word('отстройте', 5),
  imperfect: [],
};

perfectVerbs.set(отстроить.name.text, отстроить);

export { отстроить };