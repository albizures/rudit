import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плакать: PerfectVerb = {
  name: Word('плакать', 2),
  singular1stPerson: Word('плачу', 2),
  singular2ndPerson: Word('плачешь', 2),
  singular3rdPerson: Word('плачет', 2),
  plural1stPerson: Word('плачем', 2),
  plural2ndPerson: Word('плачете', 2),
  plural3rdPerson: Word('плачут', 2),
  masculinePast: Word('плакал', 2),
  femininePast: Word('плакала', 2),
  neuterPast: Word('плакало', 2),
  pluralPast: Word('плакали', 2),
  imperativeInformal: Word('плачь', 2),
  imperativeFormal: Word('плачьте', 2),
  imperfect: ['заплакать','поплакать'],
};

perfectVerbs.set(плакать.name.text, плакать);

export { плакать };