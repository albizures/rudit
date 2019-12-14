import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпендриваться: PerfectVerb = {
  name: Word('выпендриваться', 3),
  singular1stPerson: Word('выпендриваюсь', 3),
  singular2ndPerson: Word('выпендриваешься', 3),
  singular3rdPerson: Word('выпендривается', 3),
  plural1stPerson: Word('выпендриваемся', 3),
  plural2ndPerson: Word('выпендриваетесь', 3),
  plural3rdPerson: Word('выпендриваются', 3),
  masculinePast: Word('выпендривался', 3),
  femininePast: Word('выпендривалась', 3),
  neuterPast: Word('выпендривалось', 3),
  pluralPast: Word('выпендривались', 3),
  imperativeInformal: Word('выпендривайся', 3),
  imperativeFormal: Word('выпендривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выпендриваться.name.text, выпендриваться);

export { выпендриваться };