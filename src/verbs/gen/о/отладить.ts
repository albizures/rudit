import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отладить: PerfectVerb = {
  name: Word('отладить', 3),
  singular1stPerson: Word('отлажу', 3),
  singular2ndPerson: Word('отладишь', 3),
  singular3rdPerson: Word('отладит', 3),
  plural1stPerson: Word('отладим', 3),
  plural2ndPerson: Word('отладите', 3),
  plural3rdPerson: Word('отладят', 3),
  masculinePast: Word('отладил', 3),
  femininePast: Word('отладила', 3),
  neuterPast: Word('отладило', 3),
  pluralPast: Word('отладили', 3),
  imperativeInformal: Word('отладь', 3),
  imperativeFormal: Word('отладьте', 3),
  imperfect: [],
};

perfectVerbs.set(отладить.name.text, отладить);

export { отладить };