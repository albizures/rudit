import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распариваться: PerfectVerb = {
  name: Word('распариваться', 4),
  singular1stPerson: Word('распариваюсь', 4),
  singular2ndPerson: Word('распариваешься', 4),
  singular3rdPerson: Word('распаривается', 4),
  plural1stPerson: Word('распариваемся', 4),
  plural2ndPerson: Word('распариваетесь', 4),
  plural3rdPerson: Word('распариваются', 4),
  masculinePast: Word('распаривался', 4),
  femininePast: Word('распаривалась', 4),
  neuterPast: Word('распаривалось', 4),
  pluralPast: Word('распаривались', 4),
  imperativeInformal: Word('распаривайся', 4),
  imperativeFormal: Word('распаривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(распариваться.name.text, распариваться);

export { распариваться };