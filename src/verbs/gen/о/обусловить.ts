import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обусловить: PerfectVerb = {
  name: Word('обусловить', 5),
  singular1stPerson: Word('обусловлю', 5),
  singular2ndPerson: Word('обусловишь', 5),
  singular3rdPerson: Word('обусловит', 5),
  plural1stPerson: Word('обусловим', 5),
  plural2ndPerson: Word('обусловите', 5),
  plural3rdPerson: Word('обусловят', 5),
  masculinePast: Word('обусловил', 5),
  femininePast: Word('обусловила', 5),
  neuterPast: Word('обусловило', 5),
  pluralPast: Word('обусловили', 5),
  imperativeInformal: Word('обусловь', 5),
  imperativeFormal: Word('обусловьте', 5),
  imperfect: [],
};

perfectVerbs.set(обусловить.name.text, обусловить);

export { обусловить };