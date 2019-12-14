import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплакать: PerfectVerb = {
  name: Word('оплакать', 3),
  singular1stPerson: Word('оплачу', 3),
  singular2ndPerson: Word('оплачешь', 3),
  singular3rdPerson: Word('оплачет', 3),
  plural1stPerson: Word('оплачем', 3),
  plural2ndPerson: Word('оплачете', 3),
  plural3rdPerson: Word('оплачут', 3),
  masculinePast: Word('оплакал', 3),
  femininePast: Word('оплакала', 3),
  neuterPast: Word('оплакало', 3),
  pluralPast: Word('оплакали', 3),
  imperativeInformal: Word('оплачь', 3),
  imperativeFormal: Word('оплачьте', 3),
  imperfect: ['оплакивать'],
};

perfectVerbs.set(оплакать.name.text, оплакать);

export { оплакать };