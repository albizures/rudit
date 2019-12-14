import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врубить: PerfectVerb = {
  name: Word('врубить', 4),
  singular1stPerson: Word('врублю', 5),
  singular2ndPerson: Word('врубишь', 2),
  singular3rdPerson: Word('врубит', 2),
  plural1stPerson: Word('врубим', 2),
  plural2ndPerson: Word('врубите', 2),
  plural3rdPerson: Word('врубят', 2),
  masculinePast: Word('врубил', 4),
  femininePast: Word('врубила', 4),
  neuterPast: Word('врубило', 4),
  pluralPast: Word('врубили', 4),
  imperativeInformal: Word('вруби', 4),
  imperativeFormal: Word('врубите', 4),
  imperfect: [],
};

perfectVerbs.set(врубить.name.text, врубить);

export { врубить };