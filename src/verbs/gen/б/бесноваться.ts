import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бесноваться: PerfectVerb = {
  name: Word('бесноваться', 6),
  singular1stPerson: Word('беснуюсь', 4),
  singular2ndPerson: Word('беснуешься', 4),
  singular3rdPerson: Word('беснуется', 4),
  plural1stPerson: Word('беснуемся', 4),
  plural2ndPerson: Word('беснуетесь', 4),
  plural3rdPerson: Word('беснуются', 4),
  masculinePast: Word('бесновался', 6),
  femininePast: Word('бесновалась', 6),
  neuterPast: Word('бесновалось', 6),
  pluralPast: Word('бесновались', 6),
  imperativeInformal: Word('беснуйся', 4),
  imperativeFormal: Word('беснуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(бесноваться.name.text, бесноваться);

export { бесноваться };