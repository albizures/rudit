import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорубить: PerfectVerb = {
  name: Word('прорубить', 6),
  singular1stPerson: Word('прорублю', 7),
  singular2ndPerson: Word('прорубишь', 4),
  singular3rdPerson: Word('прорубит', 4),
  plural1stPerson: Word('прорубим', 4),
  plural2ndPerson: Word('прорубите', 4),
  plural3rdPerson: Word('прорубят', 4),
  masculinePast: Word('прорубил', 6),
  femininePast: Word('прорубила', 6),
  neuterPast: Word('прорубило', 6),
  pluralPast: Word('прорубили', 6),
  imperativeInformal: Word('проруби', 6),
  imperativeFormal: Word('прорубите', 6),
  imperfect: [],
};

perfectVerbs.set(прорубить.name.text, прорубить);

export { прорубить };