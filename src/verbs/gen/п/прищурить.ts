import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прищурить: PerfectVerb = {
  name: Word('прищурить', 4),
  singular1stPerson: Word('прищурю', 4),
  singular2ndPerson: Word('прищуришь', 4),
  singular3rdPerson: Word('прищурит', 4),
  plural1stPerson: Word('прищурим', 4),
  plural2ndPerson: Word('прищурите', 4),
  plural3rdPerson: Word('прищурят', 4),
  masculinePast: Word('прищурил', 4),
  femininePast: Word('прищурила', 4),
  neuterPast: Word('прищурило', 4),
  pluralPast: Word('прищурили', 4),
  imperativeInformal: Word('прищурь', 4),
  imperativeFormal: Word('прищурьте', 4),
  imperfect: [],
};

perfectVerbs.set(прищурить.name.text, прищурить);

export { прищурить };