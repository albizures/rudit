import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подразумеваться: PerfectVerb = {
  name: Word('подразумеваться', 10),
  singular1stPerson: Word('подразумеваюсь', 10),
  singular2ndPerson: Word('подразумеваешься', 10),
  singular3rdPerson: Word('подразумевается', 10),
  plural1stPerson: Word('подразумеваемся', 10),
  plural2ndPerson: Word('подразумеваетесь', 10),
  plural3rdPerson: Word('подразумеваются', 10),
  masculinePast: Word('подразумевался', 10),
  femininePast: Word('подразумевалась', 10),
  neuterPast: Word('подразумевалось', 10),
  pluralPast: Word('подразумевались', 10),
  imperativeInformal: Word('подразумевайся', 10),
  imperativeFormal: Word('подразумевайтесь', 10),
  imperfect: [],
};

perfectVerbs.set(подразумеваться.name.text, подразумеваться);

export { подразумеваться };