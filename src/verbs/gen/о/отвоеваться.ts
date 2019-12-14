import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвоеваться: PerfectVerb = {
  name: Word('отвоеваться', 6),
  singular1stPerson: Word('отвоююсь', 4),
  singular2ndPerson: Word('отвоюешься', 4),
  singular3rdPerson: Word('отвоюется', 4),
  plural1stPerson: Word('отвоюемся', 4),
  plural2ndPerson: Word('отвоюетесь', 4),
  plural3rdPerson: Word('отвоюются', 4),
  masculinePast: Word('отвоевался', 6),
  femininePast: Word('отвоевалась', 6),
  neuterPast: Word('отвоевалось', 6),
  pluralPast: Word('отвоевались', 6),
  imperativeInformal: Word('отвоюйся', 4),
  imperativeFormal: Word('отвоюйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отвоеваться.name.text, отвоеваться);

export { отвоеваться };