import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накурить: PerfectVerb = {
  name: Word('накурить', 5),
  singular1stPerson: Word('накурю', 5),
  singular2ndPerson: Word('накуришь', 3),
  singular3rdPerson: Word('накурит', 3),
  plural1stPerson: Word('накурим', 3),
  plural2ndPerson: Word('накурите', 3),
  plural3rdPerson: Word('накурят', 3),
  masculinePast: Word('накурил', 5),
  femininePast: Word('накурила', 5),
  neuterPast: Word('накурило', 5),
  pluralPast: Word('накурили', 5),
  imperativeInformal: Word('накури', 5),
  imperativeFormal: Word('накурите', 5),
  imperfect: [],
};

perfectVerbs.set(накурить.name.text, накурить);

export { накурить };