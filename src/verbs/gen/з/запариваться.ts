import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запариваться: PerfectVerb = {
  name: Word('запариваться', 3),
  singular1stPerson: Word('запариваюсь', 3),
  singular2ndPerson: Word('запариваешься', 3),
  singular3rdPerson: Word('запаривается', 3),
  plural1stPerson: Word('запариваемся', 3),
  plural2ndPerson: Word('запариваетесь', 3),
  plural3rdPerson: Word('запариваются', 3),
  masculinePast: Word('запаривался', 3),
  femininePast: Word('запаривалась', 3),
  neuterPast: Word('запаривалось', 3),
  pluralPast: Word('запаривались', 3),
  imperativeInformal: Word('запаривайся', 3),
  imperativeFormal: Word('запаривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(запариваться.name.text, запариваться);

export { запариваться };