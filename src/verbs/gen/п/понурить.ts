import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понурить: PerfectVerb = {
  name: Word('понурить', 3),
  singular1stPerson: Word('понурю', 3),
  singular2ndPerson: Word('понуришь', 3),
  singular3rdPerson: Word('понурит', 3),
  plural1stPerson: Word('понурим', 3),
  plural2ndPerson: Word('понурите', 3),
  plural3rdPerson: Word('понурят', 3),
  masculinePast: Word('понурил', 3),
  femininePast: Word('понурила', 3),
  neuterPast: Word('понурило', 3),
  pluralPast: Word('понурили', 3),
  imperativeInformal: Word('понурь', 3),
  imperativeFormal: Word('понурьте', 3),
  imperfect: [],
};

perfectVerbs.set(понурить.name.text, понурить);

export { понурить };