import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довариваться: PerfectVerb = {
  name: Word('довариваться', 3),
  singular1stPerson: Word('довариваюсь', 3),
  singular2ndPerson: Word('довариваешься', 3),
  singular3rdPerson: Word('доваривается', 3),
  plural1stPerson: Word('довариваемся', 3),
  plural2ndPerson: Word('довариваетесь', 3),
  plural3rdPerson: Word('довариваются', 3),
  masculinePast: Word('доваривался', 3),
  femininePast: Word('доваривалась', 3),
  neuterPast: Word('доваривалось', 3),
  pluralPast: Word('доваривались', 3),
  imperativeInformal: Word('доваривайся', 3),
  imperativeFormal: Word('доваривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(довариваться.name.text, довариваться);

export { довариваться };