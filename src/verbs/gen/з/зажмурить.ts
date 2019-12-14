import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажмурить: PerfectVerb = {
  name: Word('зажмурить', 4),
  singular1stPerson: Word('зажмурю', 4),
  singular2ndPerson: Word('зажмуришь', 4),
  singular3rdPerson: Word('зажмурит', 4),
  plural1stPerson: Word('зажмурим', 4),
  plural2ndPerson: Word('зажмурите', 4),
  plural3rdPerson: Word('зажмурят', 4),
  masculinePast: Word('зажмурил', 4),
  femininePast: Word('зажмурила', 4),
  neuterPast: Word('зажмурило', 4),
  pluralPast: Word('зажмурили', 4),
  imperativeInformal: Word('зажмурь', 4),
  imperativeFormal: Word('зажмурьте', 4),
  imperfect: [],
};

perfectVerbs.set(зажмурить.name.text, зажмурить);

export { зажмурить };