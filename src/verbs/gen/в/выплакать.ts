import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплакать: PerfectVerb = {
  name: Word('выплакать', 1),
  singular1stPerson: Word('выплачу', 1),
  singular2ndPerson: Word('выплачешь', 1),
  singular3rdPerson: Word('выплачет', 1),
  plural1stPerson: Word('выплачем', 1),
  plural2ndPerson: Word('выплачете', 1),
  plural3rdPerson: Word('выплачут', 1),
  masculinePast: Word('выплакал', 1),
  femininePast: Word('выплакала', 1),
  neuterPast: Word('выплакало', 1),
  pluralPast: Word('выплакали', 1),
  imperativeInformal: Word('выплачь', 1),
  imperativeFormal: Word('выплачьте', 1),
  imperfect: [],
};

perfectVerbs.set(выплакать.name.text, выплакать);

export { выплакать };