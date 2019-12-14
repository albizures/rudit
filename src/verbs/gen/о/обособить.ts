import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обособить: PerfectVerb = {
  name: Word('обособить', 4),
  singular1stPerson: Word('обособлю', 4),
  singular2ndPerson: Word('обособишь', 4),
  singular3rdPerson: Word('обособит', 4),
  plural1stPerson: Word('обособим', 4),
  plural2ndPerson: Word('обособите', 4),
  plural3rdPerson: Word('обособят', 4),
  masculinePast: Word('обособил', 4),
  femininePast: Word('обособила', 4),
  neuterPast: Word('обособило', 4),
  pluralPast: Word('обособили', 4),
  imperativeInformal: Word('обособь', 4),
  imperativeFormal: Word('обособьте', 4),
  imperfect: [],
};

perfectVerbs.set(обособить.name.text, обособить);

export { обособить };