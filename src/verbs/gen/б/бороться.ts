import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бороться: PerfectVerb = {
  name: Word('бороться', 3),
  singular1stPerson: Word('борюсь', 3),
  singular2ndPerson: Word('борешься', 1),
  singular3rdPerson: Word('борется', 1),
  plural1stPerson: Word('боремся', 1),
  plural2ndPerson: Word('боретесь', 1),
  plural3rdPerson: Word('борются', 1),
  masculinePast: Word('боролся', 3),
  femininePast: Word('боролась', 3),
  neuterPast: Word('боролось', 3),
  pluralPast: Word('боролись', 3),
  imperativeInformal: Word('борись', 3),
  imperativeFormal: Word('боритесь', 3),
  imperfect: [],
};

perfectVerbs.set(бороться.name.text, бороться);

export { бороться };