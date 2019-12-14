import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поторговаться: PerfectVerb = {
  name: Word('поторговаться', 8),
  singular1stPerson: Word('поторгуюсь', 6),
  singular2ndPerson: Word('поторгуешься', 6),
  singular3rdPerson: Word('поторгуется', 6),
  plural1stPerson: Word('поторгуемся', 6),
  plural2ndPerson: Word('поторгуетесь', 6),
  plural3rdPerson: Word('поторгуются', 6),
  masculinePast: Word('поторговался', 8),
  femininePast: Word('поторговалась', 8),
  neuterPast: Word('поторговалось', 8),
  pluralPast: Word('поторговались', 8),
  imperativeInformal: Word('поторгуйся', 6),
  imperativeFormal: Word('поторгуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поторговаться.name.text, поторговаться);

export { поторговаться };