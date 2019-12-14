import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрубить: PerfectVerb = {
  name: Word('обрубить', 5),
  singular1stPerson: Word('обрублю', 6),
  singular2ndPerson: Word('обрубишь', 3),
  singular3rdPerson: Word('обрубит', 3),
  plural1stPerson: Word('обрубим', 3),
  plural2ndPerson: Word('обрубите', 3),
  plural3rdPerson: Word('обрубят', 3),
  masculinePast: Word('обрубил', 5),
  femininePast: Word('обрубила', 5),
  neuterPast: Word('обрубило', 5),
  pluralPast: Word('обрубили', 5),
  imperativeInformal: Word('обруби', 5),
  imperativeFormal: Word('обрубите', 5),
  imperfect: [],
};

perfectVerbs.set(обрубить.name.text, обрубить);

export { обрубить };