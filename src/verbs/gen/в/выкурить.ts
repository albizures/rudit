import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкурить: PerfectVerb = {
  name: Word('выкурить', 1),
  singular1stPerson: Word('выкурю', 1),
  singular2ndPerson: Word('выкуришь', 1),
  singular3rdPerson: Word('выкурит', 1),
  plural1stPerson: Word('выкурим', 1),
  plural2ndPerson: Word('выкурите', 1),
  plural3rdPerson: Word('выкурят', 1),
  masculinePast: Word('выкурил', 1),
  femininePast: Word('выкурила', 1),
  neuterPast: Word('выкурило', 1),
  pluralPast: Word('выкурили', 1),
  imperativeInformal: Word('выкури', 1),
  imperativeFormal: Word('выкурите', 1),
  imperfect: [],
};

perfectVerbs.set(выкурить.name.text, выкурить);

export { выкурить };