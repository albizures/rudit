import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поплакать: PerfectVerb = {
  name: Word('поплакать', 4),
  singular1stPerson: Word('поплачу', 4),
  singular2ndPerson: Word('поплачешь', 4),
  singular3rdPerson: Word('поплачет', 4),
  plural1stPerson: Word('поплачем', 4),
  plural2ndPerson: Word('поплачете', 4),
  plural3rdPerson: Word('поплачут', 4),
  masculinePast: Word('поплакал', 4),
  femininePast: Word('поплакала', 4),
  neuterPast: Word('поплакало', 4),
  pluralPast: Word('поплакали', 4),
  imperativeInformal: Word('поплачь', 4),
  imperativeFormal: Word('поплачьте', 4),
  imperfect: [],
};

perfectVerbs.set(поплакать.name.text, поплакать);

export { поплакать };