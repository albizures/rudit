import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прожариваться: PerfectVerb = {
  name: Word('прожариваться', 4),
  singular1stPerson: Word('прожариваюсь', 4),
  singular2ndPerson: Word('прожариваешься', 4),
  singular3rdPerson: Word('прожаривается', 4),
  plural1stPerson: Word('прожариваемся', 4),
  plural2ndPerson: Word('прожариваетесь', 4),
  plural3rdPerson: Word('прожариваются', 4),
  masculinePast: Word('прожаривался', 4),
  femininePast: Word('прожаривалась', 4),
  neuterPast: Word('прожаривалось', 4),
  pluralPast: Word('прожаривались', 4),
  imperativeInformal: Word('прожаривайся', 4),
  imperativeFormal: Word('прожаривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прожариваться.name.text, прожариваться);

export { прожариваться };