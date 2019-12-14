import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отловить: PerfectVerb = {
  name: Word('отловить', 5),
  singular1stPerson: Word('отловлю', 6),
  singular2ndPerson: Word('отловишь', 3),
  singular3rdPerson: Word('отловит', 3),
  plural1stPerson: Word('отловим', 3),
  plural2ndPerson: Word('отловите', 3),
  plural3rdPerson: Word('отловят', 3),
  masculinePast: Word('отловил', 5),
  femininePast: Word('отловила', 5),
  neuterPast: Word('отловило', 5),
  pluralPast: Word('отловили', 5),
  imperativeInformal: Word('отлови', 5),
  imperativeFormal: Word('отловите', 5),
  imperfect: [],
};

perfectVerbs.set(отловить.name.text, отловить);

export { отловить };