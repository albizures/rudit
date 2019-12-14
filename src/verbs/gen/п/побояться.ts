import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побояться: PerfectVerb = {
  name: Word('побояться', 4),
  singular1stPerson: Word('побоюсь', 4),
  singular2ndPerson: Word('побоишься', 4),
  singular3rdPerson: Word('побоится', 4),
  plural1stPerson: Word('побоимся', 4),
  plural2ndPerson: Word('побоитесь', 4),
  plural3rdPerson: Word('побоятся', 4),
  masculinePast: Word('побоялся', 4),
  femininePast: Word('побоялась', 4),
  neuterPast: Word('побоялось', 4),
  pluralPast: Word('побоялись', 4),
  imperativeInformal: Word('побойся', 3),
  imperativeFormal: Word('побойтесь', 3),
  imperfect: [],
};

perfectVerbs.set(побояться.name.text, побояться);

export { побояться };