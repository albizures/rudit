import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const углубить: PerfectVerb = {
  name: Word('углубить', 5),
  singular1stPerson: Word('углублю', 6),
  singular2ndPerson: Word('углубишь', 5),
  singular3rdPerson: Word('углубит', 5),
  plural1stPerson: Word('углубим', 5),
  plural2ndPerson: Word('углубите', 5),
  plural3rdPerson: Word('углубят', 5),
  masculinePast: Word('углубил', 5),
  femininePast: Word('углубила', 5),
  neuterPast: Word('углубило', 5),
  pluralPast: Word('углубили', 5),
  imperativeInformal: Word('углуби', 5),
  imperativeFormal: Word('углубите', 5),
  imperfect: [],
};

perfectVerbs.set(углубить.name.text, углубить);

export { углубить };