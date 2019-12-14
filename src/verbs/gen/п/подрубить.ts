import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрубить: PerfectVerb = {
  name: Word('подрубить', 6),
  singular1stPerson: Word('подрублю', 7),
  singular2ndPerson: Word('подрубишь', 4),
  singular3rdPerson: Word('подрубит', 4),
  plural1stPerson: Word('подрубим', 4),
  plural2ndPerson: Word('подрубите', 4),
  plural3rdPerson: Word('подрубят', 4),
  masculinePast: Word('подрубил', 6),
  femininePast: Word('подрубила', 6),
  neuterPast: Word('подрубило', 6),
  pluralPast: Word('подрубили', 6),
  imperativeInformal: Word('подруби', 6),
  imperativeFormal: Word('подрубите', 6),
  imperfect: [],
};

perfectVerbs.set(подрубить.name.text, подрубить);

export { подрубить };