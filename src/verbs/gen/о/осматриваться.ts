import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осматриваться: PerfectVerb = {
  name: Word('осматриваться', 3),
  singular1stPerson: Word('осматриваюсь', 3),
  singular2ndPerson: Word('осматриваешься', 3),
  singular3rdPerson: Word('осматривается', 3),
  plural1stPerson: Word('осматриваемся', 3),
  plural2ndPerson: Word('осматриваетесь', 3),
  plural3rdPerson: Word('осматриваются', 3),
  masculinePast: Word('осматривался', 3),
  femininePast: Word('осматривалась', 3),
  neuterPast: Word('осматривалось', 3),
  pluralPast: Word('осматривались', 3),
  imperativeInformal: Word('осматривайся', 3),
  imperativeFormal: Word('осматривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(осматриваться.name.text, осматриваться);

export { осматриваться };