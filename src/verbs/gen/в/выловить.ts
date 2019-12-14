import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выловить: PerfectVerb = {
  name: Word('выловить', 1),
  singular1stPerson: Word('выловлю', 1),
  singular2ndPerson: Word('выловишь', 1),
  singular3rdPerson: Word('выловит', 1),
  plural1stPerson: Word('выловим', 1),
  plural2ndPerson: Word('выловите', 1),
  plural3rdPerson: Word('выловят', 1),
  masculinePast: Word('выловил', 1),
  femininePast: Word('выловила', 1),
  neuterPast: Word('выловило', 1),
  pluralPast: Word('выловили', 1),
  imperativeInformal: Word('вылови', 1),
  imperativeFormal: Word('выловите', 1),
  imperfect: [],
};

perfectVerbs.set(выловить.name.text, выловить);

export { выловить };