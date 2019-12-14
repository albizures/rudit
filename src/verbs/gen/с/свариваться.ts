import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свариваться: PerfectVerb = {
  name: Word('свариваться', 2),
  singular1stPerson: Word('свариваюсь', 2),
  singular2ndPerson: Word('свариваешься', 2),
  singular3rdPerson: Word('сваривается', 2),
  plural1stPerson: Word('свариваемся', 2),
  plural2ndPerson: Word('свариваетесь', 2),
  plural3rdPerson: Word('свариваются', 2),
  masculinePast: Word('сваривался', 2),
  femininePast: Word('сваривалась', 2),
  neuterPast: Word('сваривалось', 2),
  pluralPast: Word('сваривались', 2),
  imperativeInformal: Word('сваривайся', 2),
  imperativeFormal: Word('сваривайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(свариваться.name.text, свариваться);

export { свариваться };