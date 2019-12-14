import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сговариваться: PerfectVerb = {
  name: Word('сговариваться', 4),
  singular1stPerson: Word('сговариваюсь', 4),
  singular2ndPerson: Word('сговариваешься', 4),
  singular3rdPerson: Word('сговаривается', 4),
  plural1stPerson: Word('сговариваемся', 4),
  plural2ndPerson: Word('сговариваетесь', 4),
  plural3rdPerson: Word('сговариваются', 4),
  masculinePast: Word('сговаривался', 4),
  femininePast: Word('сговаривалась', 4),
  neuterPast: Word('сговаривалось', 4),
  pluralPast: Word('сговаривались', 4),
  imperativeInformal: Word('сговаривайся', 4),
  imperativeFormal: Word('сговаривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сговариваться.name.text, сговариваться);

export { сговариваться };