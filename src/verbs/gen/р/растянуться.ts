import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растянуться: PerfectVerb = {
  name: Word('растянуться', 6),
  singular1stPerson: Word('растянусь', 6),
  singular2ndPerson: Word('растянешься', 4),
  singular3rdPerson: Word('растянется', 4),
  plural1stPerson: Word('растянемся', 4),
  plural2ndPerson: Word('растянетесь', 4),
  plural3rdPerson: Word('растянутся', 4),
  masculinePast: Word('растянулся', 6),
  femininePast: Word('растянулась', 6),
  neuterPast: Word('растянулось', 6),
  pluralPast: Word('растянулись', 6),
  imperativeInformal: Word('растянись', 6),
  imperativeFormal: Word('растянитесь', 6),
  imperfect: [],
};

perfectVerbs.set(растянуться.name.text, растянуться);

export { растянуться };