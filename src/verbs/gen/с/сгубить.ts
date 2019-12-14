import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгубить: PerfectVerb = {
  name: Word('сгубить', 4),
  singular1stPerson: Word('сгублю', 5),
  singular2ndPerson: Word('сгубишь', 2),
  singular3rdPerson: Word('сгубит', 2),
  plural1stPerson: Word('сгубим', 2),
  plural2ndPerson: Word('сгубите', 2),
  plural3rdPerson: Word('сгубят', 2),
  masculinePast: Word('сгубил', 4),
  femininePast: Word('сгубила', 4),
  neuterPast: Word('сгубило', 4),
  pluralPast: Word('сгубили', 4),
  imperativeInformal: Word('сгуби', 4),
  imperativeFormal: Word('сгубите', 4),
  imperfect: [],
};

perfectVerbs.set(сгубить.name.text, сгубить);

export { сгубить };