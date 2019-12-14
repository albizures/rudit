import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оговариваться: PerfectVerb = {
  name: Word('оговариваться', 4),
  singular1stPerson: Word('оговариваюсь', 4),
  singular2ndPerson: Word('оговариваешься', 4),
  singular3rdPerson: Word('оговаривается', 4),
  plural1stPerson: Word('оговариваемся', 4),
  plural2ndPerson: Word('оговариваетесь', 4),
  plural3rdPerson: Word('оговариваются', 4),
  masculinePast: Word('оговаривался', 4),
  femininePast: Word('оговаривалась', 4),
  neuterPast: Word('оговаривалось', 4),
  pluralPast: Word('оговаривались', 4),
  imperativeInformal: Word('оговаривайся', 4),
  imperativeFormal: Word('оговаривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(оговариваться.name.text, оговариваться);

export { оговариваться };