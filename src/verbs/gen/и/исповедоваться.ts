import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исповедоваться: PerfectVerb = {
  name: Word('исповедоваться', 5),
  singular1stPerson: Word('исповедуюсь', 5),
  singular2ndPerson: Word('исповедуешься', 5),
  singular3rdPerson: Word('исповедуется', 5),
  plural1stPerson: Word('исповедуемся', 5),
  plural2ndPerson: Word('исповедуетесь', 5),
  plural3rdPerson: Word('исповедуются', 5),
  masculinePast: Word('исповедовался', 5),
  femininePast: Word('исповедовалась', 5),
  neuterPast: Word('исповедовалось', 5),
  pluralPast: Word('исповедовались', 5),
  imperativeInformal: Word('исповедуйся', 5),
  imperativeFormal: Word('исповедуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(исповедоваться.name.text, исповедоваться);

export { исповедоваться };