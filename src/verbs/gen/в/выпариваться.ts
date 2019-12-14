import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпариваться: PerfectVerb = {
  name: Word('выпариваться', 3),
  singular1stPerson: Word('выпариваюсь', 3),
  singular2ndPerson: Word('выпариваешься', 3),
  singular3rdPerson: Word('выпаривается', 3),
  plural1stPerson: Word('выпариваемся', 3),
  plural2ndPerson: Word('выпариваетесь', 3),
  plural3rdPerson: Word('выпариваются', 3),
  masculinePast: Word('выпаривался', 3),
  femininePast: Word('выпаривалась', 3),
  neuterPast: Word('выпаривалось', 3),
  pluralPast: Word('выпаривались', 3),
  imperativeInformal: Word('выпаривайся', 3),
  imperativeFormal: Word('выпаривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выпариваться.name.text, выпариваться);

export { выпариваться };