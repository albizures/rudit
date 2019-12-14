import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подловить: PerfectVerb = {
  name: Word('подловить', 6),
  singular1stPerson: Word('подловлю', 7),
  singular2ndPerson: Word('подловишь', 4),
  singular3rdPerson: Word('подловит', 4),
  plural1stPerson: Word('подловим', 4),
  plural2ndPerson: Word('подловите', 4),
  plural3rdPerson: Word('подловят', 4),
  masculinePast: Word('подловил', 6),
  femininePast: Word('подловила', 6),
  neuterPast: Word('подловило', 6),
  pluralPast: Word('подловили', 6),
  imperativeInformal: Word('подлови', 6),
  imperativeFormal: Word('подловите', 6),
  imperfect: [],
};

perfectVerbs.set(подловить.name.text, подловить);

export { подловить };