import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возрадоваться: PerfectVerb = {
  name: Word('возрадоваться', 4),
  singular1stPerson: Word('возрадуюсь', 4),
  singular2ndPerson: Word('возрадуешься', 4),
  singular3rdPerson: Word('возрадуется', 4),
  plural1stPerson: Word('возрадуемся', 4),
  plural2ndPerson: Word('возрадуетесь', 4),
  plural3rdPerson: Word('возрадуются', 4),
  masculinePast: Word('возрадовался', 4),
  femininePast: Word('возрадовалась', 4),
  neuterPast: Word('возрадовалось', 4),
  pluralPast: Word('возрадовались', 4),
  imperativeInformal: Word('возрадуйся', 4),
  imperativeFormal: Word('возрадуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(возрадоваться.name.text, возрадоваться);

export { возрадоваться };