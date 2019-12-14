import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припудриваться: PerfectVerb = {
  name: Word('припудриваться', 4),
  singular1stPerson: Word('припудриваюсь', 4),
  singular2ndPerson: Word('припудриваешься', 4),
  singular3rdPerson: Word('припудривается', 4),
  plural1stPerson: Word('припудриваемся', 4),
  plural2ndPerson: Word('припудриваетесь', 4),
  plural3rdPerson: Word('припудриваются', 4),
  masculinePast: Word('припудривался', 4),
  femininePast: Word('припудривалась', 4),
  neuterPast: Word('припудривалось', 4),
  pluralPast: Word('припудривались', 4),
  imperativeInformal: Word('припудривайся', 4),
  imperativeFormal: Word('припудривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(припудриваться.name.text, припудриваться);

export { припудриваться };