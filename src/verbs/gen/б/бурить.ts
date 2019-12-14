import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бурить: PerfectVerb = {
  name: Word('бурить', 3),
  singular1stPerson: Word('бурю', 3),
  singular2ndPerson: Word('буришь', 3),
  singular3rdPerson: Word('бурит', 3),
  plural1stPerson: Word('бурим', 3),
  plural2ndPerson: Word('бурите', 3),
  plural3rdPerson: Word('бурят', 3),
  masculinePast: Word('бурил', 3),
  femininePast: Word('бурила', 3),
  neuterPast: Word('бурило', 3),
  pluralPast: Word('бурили', 3),
  imperativeInformal: Word('бури', 3),
  imperativeFormal: Word('бурите', 3),
  imperfect: [],
};

perfectVerbs.set(бурить.name.text, бурить);

export { бурить };