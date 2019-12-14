import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const халтурить: PerfectVerb = {
  name: Word('халтурить', 4),
  singular1stPerson: Word('халтурю', 4),
  singular2ndPerson: Word('халтуришь', 4),
  singular3rdPerson: Word('халтурит', 4),
  plural1stPerson: Word('халтурим', 4),
  plural2ndPerson: Word('халтурите', 4),
  plural3rdPerson: Word('халтурят', 4),
  masculinePast: Word('халтурил', 4),
  femininePast: Word('халтурила', 4),
  neuterPast: Word('халтурило', 4),
  pluralPast: Word('халтурили', 4),
  imperativeInformal: Word('халтурь', 4),
  imperativeFormal: Word('халтурьте', 4),
  imperfect: [],
};

perfectVerbs.set(халтурить.name.text, халтурить);

export { халтурить };