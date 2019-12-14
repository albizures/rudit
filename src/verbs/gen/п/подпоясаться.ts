import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпоясаться: PerfectVerb = {
  name: Word('подпоясаться', 5),
  singular1stPerson: Word('подпояшусь', 5),
  singular2ndPerson: Word('подпояшешься', 5),
  singular3rdPerson: Word('подпояшется', 5),
  plural1stPerson: Word('подпояшемся', 5),
  plural2ndPerson: Word('подпояшетесь', 5),
  plural3rdPerson: Word('подпояшутся', 5),
  masculinePast: Word('подпоясался', 5),
  femininePast: Word('подпоясалась', 5),
  neuterPast: Word('подпоясалось', 5),
  pluralPast: Word('подпоясались', 5),
  imperativeInformal: Word('подпояшься', 5),
  imperativeFormal: Word('подпояшьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(подпоясаться.name.text, подпоясаться);

export { подпоясаться };