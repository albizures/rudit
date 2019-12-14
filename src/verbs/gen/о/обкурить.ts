import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкурить: PerfectVerb = {
  name: Word('обкурить', 5),
  singular1stPerson: Word('обкурю', 5),
  singular2ndPerson: Word('обкуришь', 3),
  singular3rdPerson: Word('обкурит', 3),
  plural1stPerson: Word('обкурим', 3),
  plural2ndPerson: Word('обкурите', 3),
  plural3rdPerson: Word('обкурят', 3),
  masculinePast: Word('обкурил', 5),
  femininePast: Word('обкурила', 5),
  neuterPast: Word('обкурило', 5),
  pluralPast: Word('обкурили', 5),
  imperativeInformal: Word('обкури', 5),
  imperativeFormal: Word('обкурите', 5),
  imperfect: [],
};

perfectVerbs.set(обкурить.name.text, обкурить);

export { обкурить };