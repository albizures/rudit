import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарубить: PerfectVerb = {
  name: Word('зарубить', 5),
  singular1stPerson: Word('зарублю', 6),
  singular2ndPerson: Word('зарубишь', 3),
  singular3rdPerson: Word('зарубит', 3),
  plural1stPerson: Word('зарубим', 3),
  plural2ndPerson: Word('зарубите', 3),
  plural3rdPerson: Word('зарубят', 3),
  masculinePast: Word('зарубил', 5),
  femininePast: Word('зарубила', 5),
  neuterPast: Word('зарубило', 5),
  pluralPast: Word('зарубили', 5),
  imperativeInformal: Word('заруби', 5),
  imperativeFormal: Word('зарубите', 5),
  imperfect: [],
};

perfectVerbs.set(зарубить.name.text, зарубить);

export { зарубить };