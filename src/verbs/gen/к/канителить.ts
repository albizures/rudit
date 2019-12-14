import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const канителить: PerfectVerb = {
  name: Word('канителить', 5),
  singular1stPerson: Word('канителю', 5),
  singular2ndPerson: Word('канителишь', 5),
  singular3rdPerson: Word('канителит', 5),
  plural1stPerson: Word('канителим', 5),
  plural2ndPerson: Word('канителите', 5),
  plural3rdPerson: Word('канителят', 5),
  masculinePast: Word('канителил', 5),
  femininePast: Word('канителила', 5),
  neuterPast: Word('канителило', 5),
  pluralPast: Word('канителили', 5),
  imperativeInformal: Word('канитель', 5),
  imperativeFormal: Word('канительте', 5),
  imperfect: [],
};

perfectVerbs.set(канителить.name.text, канителить);

export { канителить };