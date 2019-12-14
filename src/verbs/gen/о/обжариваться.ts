import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжариваться: PerfectVerb = {
  name: Word('обжариваться', 3),
  singular1stPerson: Word('обжариваюсь', 3),
  singular2ndPerson: Word('обжариваешься', 3),
  singular3rdPerson: Word('обжаривается', 3),
  plural1stPerson: Word('обжариваемся', 3),
  plural2ndPerson: Word('обжариваетесь', 3),
  plural3rdPerson: Word('обжариваются', 3),
  masculinePast: Word('обжаривался', 3),
  femininePast: Word('обжаривалась', 3),
  neuterPast: Word('обжаривалось', 3),
  pluralPast: Word('обжаривались', 3),
  imperativeInformal: Word('обжаривайся', 3),
  imperativeFormal: Word('обжаривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обжариваться.name.text, обжариваться);

export { обжариваться };