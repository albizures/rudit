import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спариваться: PerfectVerb = {
  name: Word('спариваться', 2),
  singular1stPerson: Word('спариваюсь', 2),
  singular2ndPerson: Word('спариваешься', 2),
  singular3rdPerson: Word('спаривается', 2),
  plural1stPerson: Word('спариваемся', 2),
  plural2ndPerson: Word('спариваетесь', 2),
  plural3rdPerson: Word('спариваются', 2),
  masculinePast: Word('спаривался', 2),
  femininePast: Word('спаривалась', 2),
  neuterPast: Word('спаривалось', 2),
  pluralPast: Word('спаривались', 2),
  imperativeInformal: Word('спаривайся', 2),
  imperativeFormal: Word('спаривайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(спариваться.name.text, спариваться);

export { спариваться };