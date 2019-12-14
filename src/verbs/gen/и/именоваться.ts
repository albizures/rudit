import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const именоваться: PerfectVerb = {
  name: Word('именоваться', 6),
  singular1stPerson: Word('именуюсь', 4),
  singular2ndPerson: Word('именуешься', 4),
  singular3rdPerson: Word('именуется', 4),
  plural1stPerson: Word('именуемся', 4),
  plural2ndPerson: Word('именуетесь', 4),
  plural3rdPerson: Word('именуются', 4),
  masculinePast: Word('именовался', 6),
  femininePast: Word('именовалась', 6),
  neuterPast: Word('именовалось', 6),
  pluralPast: Word('именовались', 6),
  imperativeInformal: Word('именуйся', 4),
  imperativeFormal: Word('именуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(именоваться.name.text, именоваться);

export { именоваться };