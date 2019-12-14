import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проплакать: PerfectVerb = {
  name: Word('проплакать', 5),
  singular1stPerson: Word('проплачу', 5),
  singular2ndPerson: Word('проплачешь', 5),
  singular3rdPerson: Word('проплачет', 5),
  plural1stPerson: Word('проплачем', 5),
  plural2ndPerson: Word('проплачете', 5),
  plural3rdPerson: Word('проплачут', 5),
  masculinePast: Word('проплакал', 5),
  femininePast: Word('проплакала', 5),
  neuterPast: Word('проплакало', 5),
  pluralPast: Word('проплакали', 5),
  imperativeInformal: Word('проплачь', 5),
  imperativeFormal: Word('проплачьте', 5),
  imperfect: [],
};

perfectVerbs.set(проплакать.name.text, проплакать);

export { проплакать };