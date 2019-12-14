import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тушеваться: PerfectVerb = {
  name: Word('тушеваться', 5),
  singular1stPerson: Word('тушуюсь', 3),
  singular2ndPerson: Word('тушуешься', 3),
  singular3rdPerson: Word('тушуется', 3),
  plural1stPerson: Word('тушуемся', 3),
  plural2ndPerson: Word('тушуетесь', 3),
  plural3rdPerson: Word('тушуются', 3),
  masculinePast: Word('тушевался', 5),
  femininePast: Word('тушевалась', 5),
  neuterPast: Word('тушевалось', 5),
  pluralPast: Word('тушевались', 5),
  imperativeInformal: Word('тушуйся', 3),
  imperativeFormal: Word('тушуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(тушеваться.name.text, тушеваться);

export { тушеваться };