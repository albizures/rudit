import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брезжить: PerfectVerb = {
  name: Word('брезжить', 2),
  singular1stPerson: Word('брезжу', 2),
  singular2ndPerson: Word('брезжишь', 2),
  singular3rdPerson: Word('брезжит', 2),
  plural1stPerson: Word('брезжим', 2),
  plural2ndPerson: Word('брезжите', 2),
  plural3rdPerson: Word('брезжат', 2),
  masculinePast: Word('брезжил', 2),
  femininePast: Word('брезжила', 2),
  neuterPast: Word('брезжило', 2),
  pluralPast: Word('брезжили', 2),
  imperativeInformal: Word('брезжи', 2),
  imperativeFormal: Word('брезжите', 2),
  imperfect: [],
};

perfectVerbs.set(брезжить.name.text, брезжить);

export { брезжить };