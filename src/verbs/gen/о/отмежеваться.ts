import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмежеваться: PerfectVerb = {
  name: Word('отмежеваться', 7),
  singular1stPerson: Word('отмежуюсь', 5),
  singular2ndPerson: Word('отмежуешься', 5),
  singular3rdPerson: Word('отмежуется', 5),
  plural1stPerson: Word('отмежуемся', 5),
  plural2ndPerson: Word('отмежуетесь', 5),
  plural3rdPerson: Word('отмежуются', 5),
  masculinePast: Word('отмежевался', 7),
  femininePast: Word('отмежевалась', 7),
  neuterPast: Word('отмежевалось', 7),
  pluralPast: Word('отмежевались', 7),
  imperativeInformal: Word('отмежуйся', 5),
  imperativeFormal: Word('отмежуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отмежеваться.name.text, отмежеваться);

export { отмежеваться };