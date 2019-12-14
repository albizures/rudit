import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охмурить: PerfectVerb = {
  name: Word('охмурить', 5),
  singular1stPerson: Word('охмурю', 5),
  singular2ndPerson: Word('охмуришь', 5),
  singular3rdPerson: Word('охмурит', 5),
  plural1stPerson: Word('охмурим', 5),
  plural2ndPerson: Word('охмурите', 5),
  plural3rdPerson: Word('охмурят', 5),
  masculinePast: Word('охмурил', 5),
  femininePast: Word('охмурила', 5),
  neuterPast: Word('охмурило', 5),
  pluralPast: Word('охмурили', 5),
  imperativeInformal: Word('охмури', 5),
  imperativeFormal: Word('охмурите', 5),
  imperfect: [],
};

perfectVerbs.set(охмурить.name.text, охмурить);

export { охмурить };