import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплакать: PerfectVerb = {
  name: Word('заплакать', 4),
  singular1stPerson: Word('заплачу', 4),
  singular2ndPerson: Word('заплачешь', 4),
  singular3rdPerson: Word('заплачет', 4),
  plural1stPerson: Word('заплачем', 4),
  plural2ndPerson: Word('заплачете', 4),
  plural3rdPerson: Word('заплачут', 4),
  masculinePast: Word('заплакал', 4),
  femininePast: Word('заплакала', 4),
  neuterPast: Word('заплакало', 4),
  pluralPast: Word('заплакали', 4),
  imperativeInformal: Word('заплачь', 4),
  imperativeFormal: Word('заплачьте', 4),
  imperfect: [],
};

perfectVerbs.set(заплакать.name.text, заплакать);

export { заплакать };