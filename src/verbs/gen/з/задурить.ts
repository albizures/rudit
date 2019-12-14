import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задурить: PerfectVerb = {
  name: Word('задурить', 5),
  singular1stPerson: Word('задурю', 5),
  singular2ndPerson: Word('задуришь', 5),
  singular3rdPerson: Word('задурит', 5),
  plural1stPerson: Word('задурим', 5),
  plural2ndPerson: Word('задурите', 5),
  plural3rdPerson: Word('задурят', 5),
  masculinePast: Word('задурил', 5),
  femininePast: Word('задурила', 5),
  neuterPast: Word('задурило', 5),
  pluralPast: Word('задурили', 5),
  imperativeInformal: Word('задури', 5),
  imperativeFormal: Word('задурите', 5),
  imperfect: [],
};

perfectVerbs.set(задурить.name.text, задурить);

export { задурить };