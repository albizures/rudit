import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докурить: PerfectVerb = {
  name: Word('докурить', 5),
  singular1stPerson: Word('докурю', 5),
  singular2ndPerson: Word('докуришь', 3),
  singular3rdPerson: Word('докурит', 3),
  plural1stPerson: Word('докурим', 3),
  plural2ndPerson: Word('докурите', 3),
  plural3rdPerson: Word('докурят', 3),
  masculinePast: Word('докурил', 5),
  femininePast: Word('докурила', 5),
  neuterPast: Word('докурило', 5),
  pluralPast: Word('докурили', 5),
  imperativeInformal: Word('докури', 5),
  imperativeFormal: Word('докурите', 5),
  imperfect: [],
};

perfectVerbs.set(докурить.name.text, докурить);

export { докурить };