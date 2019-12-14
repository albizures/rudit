import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надрубить: PerfectVerb = {
  name: Word('надрубить', 6),
  singular1stPerson: Word('надрублю', 7),
  singular2ndPerson: Word('надрубишь', 4),
  singular3rdPerson: Word('надрубит', 4),
  plural1stPerson: Word('надрубим', 4),
  plural2ndPerson: Word('надрубите', 4),
  plural3rdPerson: Word('надрубят', 4),
  masculinePast: Word('надрубил', 6),
  femininePast: Word('надрубила', 6),
  neuterPast: Word('надрубило', 6),
  pluralPast: Word('надрубили', 6),
  imperativeInformal: Word('надруби', 6),
  imperativeFormal: Word('надрубите', 6),
  imperfect: [],
};

perfectVerbs.set(надрубить.name.text, надрубить);

export { надрубить };