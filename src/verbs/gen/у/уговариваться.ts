import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уговариваться: PerfectVerb = {
  name: Word('уговариваться', 4),
  singular1stPerson: Word('уговариваюсь', 4),
  singular2ndPerson: Word('уговариваешься', 4),
  singular3rdPerson: Word('уговаривается', 4),
  plural1stPerson: Word('уговариваемся', 4),
  plural2ndPerson: Word('уговариваетесь', 4),
  plural3rdPerson: Word('уговариваются', 4),
  masculinePast: Word('уговаривался', 4),
  femininePast: Word('уговаривалась', 4),
  neuterPast: Word('уговаривалось', 4),
  pluralPast: Word('уговаривались', 4),
  imperativeInformal: Word('уговаривайся', 4),
  imperativeFormal: Word('уговаривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(уговариваться.name.text, уговариваться);

export { уговариваться };