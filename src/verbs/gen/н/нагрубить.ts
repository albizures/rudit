import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагрубить: PerfectVerb = {
  name: Word('нагрубить', 6),
  singular1stPerson: Word('нагрублю', 7),
  singular2ndPerson: Word('нагрубишь', 6),
  singular3rdPerson: Word('нагрубит', 6),
  plural1stPerson: Word('нагрубим', 6),
  plural2ndPerson: Word('нагрубите', 6),
  plural3rdPerson: Word('нагрубят', 6),
  masculinePast: Word('нагрубил', 6),
  femininePast: Word('нагрубила', 6),
  neuterPast: Word('нагрубило', 6),
  pluralPast: Word('нагрубили', 6),
  imperativeInformal: Word('нагруби', 6),
  imperativeFormal: Word('нагрубите', 6),
  imperfect: [],
};

perfectVerbs.set(нагрубить.name.text, нагрубить);

export { нагрубить };