import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загубить: PerfectVerb = {
  name: Word('загубить', 5),
  singular1stPerson: Word('загублю', 6),
  singular2ndPerson: Word('загубишь', 3),
  singular3rdPerson: Word('загубит', 3),
  plural1stPerson: Word('загубим', 3),
  plural2ndPerson: Word('загубите', 3),
  plural3rdPerson: Word('загубят', 3),
  masculinePast: Word('загубил', 5),
  femininePast: Word('загубила', 5),
  neuterPast: Word('загубило', 5),
  pluralPast: Word('загубили', 5),
  imperativeInformal: Word('загуби', 5),
  imperativeFormal: Word('загубите', 5),
  imperfect: [],
};

perfectVerbs.set(загубить.name.text, загубить);

export { загубить };