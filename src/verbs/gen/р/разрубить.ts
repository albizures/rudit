import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрубить: PerfectVerb = {
  name: Word('разрубить', 6),
  singular1stPerson: Word('разрублю', 7),
  singular2ndPerson: Word('разрубишь', 4),
  singular3rdPerson: Word('разрубит', 4),
  plural1stPerson: Word('разрубим', 4),
  plural2ndPerson: Word('разрубите', 4),
  plural3rdPerson: Word('разрубят', 4),
  masculinePast: Word('разрубил', 6),
  femininePast: Word('разрубила', 6),
  neuterPast: Word('разрубило', 6),
  pluralPast: Word('разрубили', 6),
  imperativeInformal: Word('разруби', 6),
  imperativeFormal: Word('разрубите', 6),
  imperfect: [],
};

perfectVerbs.set(разрубить.name.text, разрубить);

export { разрубить };