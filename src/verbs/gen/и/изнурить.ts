import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изнурить: PerfectVerb = {
  name: Word('изнурить', 5),
  singular1stPerson: Word('изнурю', 5),
  singular2ndPerson: Word('изнуришь', 5),
  singular3rdPerson: Word('изнурит', 5),
  plural1stPerson: Word('изнурим', 5),
  plural2ndPerson: Word('изнурите', 5),
  plural3rdPerson: Word('изнурят', 5),
  masculinePast: Word('изнурил', 5),
  femininePast: Word('изнурила', 5),
  neuterPast: Word('изнурило', 5),
  pluralPast: Word('изнурили', 5),
  imperativeInformal: Word('изнури', 5),
  imperativeFormal: Word('изнурите', 5),
  imperfect: ['изнурять'],
};

perfectVerbs.set(изнурить.name.text, изнурить);

export { изнурить };