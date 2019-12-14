import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажариваться: PerfectVerb = {
  name: Word('зажариваться', 3),
  singular1stPerson: Word('зажариваюсь', 3),
  singular2ndPerson: Word('зажариваешься', 3),
  singular3rdPerson: Word('зажаривается', 3),
  plural1stPerson: Word('зажариваемся', 3),
  plural2ndPerson: Word('зажариваетесь', 3),
  plural3rdPerson: Word('зажариваются', 3),
  masculinePast: Word('зажаривался', 3),
  femininePast: Word('зажаривалась', 3),
  neuterPast: Word('зажаривалось', 3),
  pluralPast: Word('зажаривались', 3),
  imperativeInformal: Word('зажаривайся', 3),
  imperativeFormal: Word('зажаривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(зажариваться.name.text, зажариваться);

export { зажариваться };