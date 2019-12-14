import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрубить: PerfectVerb = {
  name: Word('изрубить', 5),
  singular1stPerson: Word('изрублю', 6),
  singular2ndPerson: Word('изрубишь', 3),
  singular3rdPerson: Word('изрубит', 3),
  plural1stPerson: Word('изрубим', 3),
  plural2ndPerson: Word('изрубите', 3),
  plural3rdPerson: Word('изрубят', 3),
  masculinePast: Word('изрубил', 5),
  femininePast: Word('изрубила', 5),
  neuterPast: Word('изрубило', 5),
  pluralPast: Word('изрубили', 5),
  imperativeInformal: Word('изруби', 5),
  imperativeFormal: Word('изрубите', 5),
  imperfect: [],
};

perfectVerbs.set(изрубить.name.text, изрубить);

export { изрубить };