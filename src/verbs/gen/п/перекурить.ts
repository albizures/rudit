import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекурить: PerfectVerb = {
  name: Word('перекурить', 7),
  singular1stPerson: Word('перекурю', 7),
  singular2ndPerson: Word('перекуришь', 5),
  singular3rdPerson: Word('перекурит', 5),
  plural1stPerson: Word('перекурим', 5),
  plural2ndPerson: Word('перекурите', 5),
  plural3rdPerson: Word('перекурят', 5),
  masculinePast: Word('перекурил', 7),
  femininePast: Word('перекурила', 7),
  neuterPast: Word('перекурило', 7),
  pluralPast: Word('перекурили', 7),
  imperativeInformal: Word('перекури', 7),
  imperativeFormal: Word('перекурите', 7),
  imperfect: [],
};

perfectVerbs.set(перекурить.name.text, перекурить);

export { перекурить };