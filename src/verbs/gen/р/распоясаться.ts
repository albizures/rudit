import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распоясаться: PerfectVerb = {
  name: Word('распоясаться', 5),
  singular1stPerson: Word('распояшусь', 5),
  singular2ndPerson: Word('распояшешься', 5),
  singular3rdPerson: Word('распояшется', 5),
  plural1stPerson: Word('распояшемся', 5),
  plural2ndPerson: Word('распояшетесь', 5),
  plural3rdPerson: Word('распояшутся', 5),
  masculinePast: Word('распоясался', 5),
  femininePast: Word('распоясалась', 5),
  neuterPast: Word('распоясалось', 5),
  pluralPast: Word('распоясались', 5),
  imperativeInformal: Word('распояшься', 5),
  imperativeFormal: Word('распояшьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(распоясаться.name.text, распоясаться);

export { распоясаться };