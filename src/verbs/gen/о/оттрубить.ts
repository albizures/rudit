import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттрубить: PerfectVerb = {
  name: Word('оттрубить', 6),
  singular1stPerson: Word('оттрублю', 7),
  singular2ndPerson: Word('оттрубишь', 6),
  singular3rdPerson: Word('оттрубит', 6),
  plural1stPerson: Word('оттрубим', 6),
  plural2ndPerson: Word('оттрубите', 6),
  plural3rdPerson: Word('оттрубят', 6),
  masculinePast: Word('оттрубил', 6),
  femininePast: Word('оттрубила', 6),
  neuterPast: Word('оттрубило', 6),
  pluralPast: Word('оттрубили', 6),
  imperativeInformal: Word('оттруби', 6),
  imperativeFormal: Word('оттрубите', 6),
  imperfect: [],
};

perfectVerbs.set(оттрубить.name.text, оттрубить);

export { оттрубить };