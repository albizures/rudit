import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тусоваться: PerfectVerb = {
  name: Word('тусоваться', 5),
  singular1stPerson: Word('тусуюсь', 3),
  singular2ndPerson: Word('тусуешься', 3),
  singular3rdPerson: Word('тусуется', 3),
  plural1stPerson: Word('тусуемся', 3),
  plural2ndPerson: Word('тусуетесь', 3),
  plural3rdPerson: Word('тусуются', 3),
  masculinePast: Word('тусовался', 5),
  femininePast: Word('тусовалась', 5),
  neuterPast: Word('тусовалось', 5),
  pluralPast: Word('тусовались', 5),
  imperativeInformal: Word('тусуйся', 3),
  imperativeFormal: Word('тусуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(тусоваться.name.text, тусоваться);

export { тусоваться };