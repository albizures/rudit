import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвариваться: PerfectVerb = {
  name: Word('обвариваться', 3),
  singular1stPerson: Word('обвариваюсь', 3),
  singular2ndPerson: Word('обвариваешься', 3),
  singular3rdPerson: Word('обваривается', 3),
  plural1stPerson: Word('обвариваемся', 3),
  plural2ndPerson: Word('обвариваетесь', 3),
  plural3rdPerson: Word('обвариваются', 3),
  masculinePast: Word('обваривался', 3),
  femininePast: Word('обваривалась', 3),
  neuterPast: Word('обваривалось', 3),
  pluralPast: Word('обваривались', 3),
  imperativeInformal: Word('обваривайся', 3),
  imperativeFormal: Word('обваривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обвариваться.name.text, обвариваться);

export { обвариваться };