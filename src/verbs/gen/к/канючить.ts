import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const канючить: PerfectVerb = {
  name: Word('канючить', 3),
  singular1stPerson: Word('канючу', 3),
  singular2ndPerson: Word('канючишь', 3),
  singular3rdPerson: Word('канючит', 3),
  plural1stPerson: Word('канючим', 3),
  plural2ndPerson: Word('канючите', 3),
  plural3rdPerson: Word('канючат', 3),
  masculinePast: Word('канючил', 3),
  femininePast: Word('канючила', 3),
  neuterPast: Word('канючило', 3),
  pluralPast: Word('канючили', 3),
  imperativeInformal: Word('канючь', 3),
  imperativeFormal: Word('канючьте', 3),
  imperfect: [],
};

perfectVerbs.set(канючить.name.text, канючить);

export { канючить };