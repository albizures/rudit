import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажариваться: PerfectVerb = {
  name: Word('нажариваться', 3),
  singular1stPerson: Word('нажариваюсь', 3),
  singular2ndPerson: Word('нажариваешься', 3),
  singular3rdPerson: Word('нажаривается', 3),
  plural1stPerson: Word('нажариваемся', 3),
  plural2ndPerson: Word('нажариваетесь', 3),
  plural3rdPerson: Word('нажариваются', 3),
  masculinePast: Word('нажаривался', 3),
  femininePast: Word('нажаривалась', 3),
  neuterPast: Word('нажаривалось', 3),
  pluralPast: Word('нажаривались', 3),
  imperativeInformal: Word('нажаривайся', 3),
  imperativeFormal: Word('нажаривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(нажариваться.name.text, нажариваться);

export { нажариваться };