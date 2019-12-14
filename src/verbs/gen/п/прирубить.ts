import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прирубить: PerfectVerb = {
  name: Word('прирубить', 6),
  singular1stPerson: Word('прирублю', 7),
  singular2ndPerson: Word('прирубишь', 4),
  singular3rdPerson: Word('прирубит', 4),
  plural1stPerson: Word('прирубим', 4),
  plural2ndPerson: Word('прирубите', 4),
  plural3rdPerson: Word('прирубят', 4),
  masculinePast: Word('прирубил', 6),
  femininePast: Word('прирубила', 6),
  neuterPast: Word('прирубило', 6),
  pluralPast: Word('прирубили', 6),
  imperativeInformal: Word('прируби', 6),
  imperativeFormal: Word('прирубите', 6),
  imperfect: [],
};

perfectVerbs.set(прирубить.name.text, прирубить);

export { прирубить };