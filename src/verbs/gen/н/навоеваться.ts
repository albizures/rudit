import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навоеваться: PerfectVerb = {
  name: Word('навоеваться', 6),
  singular1stPerson: Word('навоююсь', 4),
  singular2ndPerson: Word('навоюешься', 4),
  singular3rdPerson: Word('навоюется', 4),
  plural1stPerson: Word('навоюемся', 4),
  plural2ndPerson: Word('навоюетесь', 4),
  plural3rdPerson: Word('навоюются', 4),
  masculinePast: Word('навоевался', 6),
  femininePast: Word('навоевалась', 6),
  neuterPast: Word('навоевалось', 6),
  pluralPast: Word('навоевались', 6),
  imperativeInformal: Word('навоюйся', 4),
  imperativeFormal: Word('навоюйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(навоеваться.name.text, навоеваться);

export { навоеваться };