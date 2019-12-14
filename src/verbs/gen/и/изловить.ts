import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изловить: PerfectVerb = {
  name: Word('изловить', 5),
  singular1stPerson: Word('изловлю', 6),
  singular2ndPerson: Word('изловишь', 3),
  singular3rdPerson: Word('изловит', 3),
  plural1stPerson: Word('изловим', 3),
  plural2ndPerson: Word('изловите', 3),
  plural3rdPerson: Word('изловят', 3),
  masculinePast: Word('изловил', 5),
  femininePast: Word('изловила', 5),
  neuterPast: Word('изловило', 5),
  pluralPast: Word('изловили', 5),
  imperativeInformal: Word('излови', 5),
  imperativeFormal: Word('изловите', 5),
  imperfect: [],
};

perfectVerbs.set(изловить.name.text, изловить);

export { изловить };