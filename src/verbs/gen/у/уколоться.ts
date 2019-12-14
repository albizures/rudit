import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уколоться: PerfectVerb = {
  name: Word('уколоться', 4),
  singular1stPerson: Word('уколюсь', 4),
  singular2ndPerson: Word('уколешься', 2),
  singular3rdPerson: Word('уколется', 2),
  plural1stPerson: Word('уколемся', 2),
  plural2ndPerson: Word('уколетесь', 2),
  plural3rdPerson: Word('уколются', 2),
  masculinePast: Word('укололся', 4),
  femininePast: Word('укололась', 4),
  neuterPast: Word('укололось', 4),
  pluralPast: Word('укололись', 4),
  imperativeInformal: Word('уколись', 4),
  imperativeFormal: Word('уколитесь', 4),
  imperfect: [],
};

perfectVerbs.set(уколоться.name.text, уколоться);

export { уколоться };