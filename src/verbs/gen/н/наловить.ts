import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наловить: PerfectVerb = {
  name: Word('наловить', 5),
  singular1stPerson: Word('наловлю', 6),
  singular2ndPerson: Word('наловишь', 3),
  singular3rdPerson: Word('наловит', 3),
  plural1stPerson: Word('наловим', 3),
  plural2ndPerson: Word('наловите', 3),
  plural3rdPerson: Word('наловят', 3),
  masculinePast: Word('наловил', 5),
  femininePast: Word('наловила', 5),
  neuterPast: Word('наловило', 5),
  pluralPast: Word('наловили', 5),
  imperativeInformal: Word('налови', 5),
  imperativeFormal: Word('наловите', 5),
  imperfect: [],
};

perfectVerbs.set(наловить.name.text, наловить);

export { наловить };