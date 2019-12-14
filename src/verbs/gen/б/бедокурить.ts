import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бедокурить: PerfectVerb = {
  name: Word('бедокурить', 5),
  singular1stPerson: Word('бедокурю', 5),
  singular2ndPerson: Word('бедокуришь', 5),
  singular3rdPerson: Word('бедокурит', 5),
  plural1stPerson: Word('бедокурим', 5),
  plural2ndPerson: Word('бедокурите', 5),
  plural3rdPerson: Word('бедокурят', 5),
  masculinePast: Word('бедокурил', 5),
  femininePast: Word('бедокурила', 5),
  neuterPast: Word('бедокурило', 5),
  pluralPast: Word('бедокурили', 5),
  imperativeInformal: Word('бедокурь', 5),
  imperativeFormal: Word('бедокурьте', 5),
  imperfect: [],
};

perfectVerbs.set(бедокурить.name.text, бедокурить);

export { бедокурить };