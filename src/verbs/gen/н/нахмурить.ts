import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахмурить: PerfectVerb = {
  name: Word('нахмурить', 4),
  singular1stPerson: Word('нахмурю', 4),
  singular2ndPerson: Word('нахмуришь', 4),
  singular3rdPerson: Word('нахмурит', 4),
  plural1stPerson: Word('нахмурим', 4),
  plural2ndPerson: Word('нахмурите', 4),
  plural3rdPerson: Word('нахмурят', 4),
  masculinePast: Word('нахмурил', 4),
  femininePast: Word('нахмурила', 4),
  neuterPast: Word('нахмурило', 4),
  pluralPast: Word('нахмурили', 4),
  imperativeInformal: Word('нахмурь', 4),
  imperativeFormal: Word('нахмурьте', 4),
  imperfect: [],
};

perfectVerbs.set(нахмурить.name.text, нахмурить);

export { нахмурить };