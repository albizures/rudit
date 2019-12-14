import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хмурить: PerfectVerb = {
  name: Word('хмурить', 2),
  singular1stPerson: Word('хмурю', 2),
  singular2ndPerson: Word('хмуришь', 2),
  singular3rdPerson: Word('хмурит', 2),
  plural1stPerson: Word('хмурим', 2),
  plural2ndPerson: Word('хмурите', 2),
  plural3rdPerson: Word('хмурят', 2),
  masculinePast: Word('хмурил', 2),
  femininePast: Word('хмурила', 2),
  neuterPast: Word('хмурило', 2),
  pluralPast: Word('хмурили', 2),
  imperativeInformal: Word('хмурь', 2),
  imperativeFormal: Word('хмурьте', 2),
  imperfect: [],
};

perfectVerbs.set(хмурить.name.text, хмурить);

export { хмурить };