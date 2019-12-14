import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повскакать: PerfectVerb = {
  name: Word('повскакать', 7),
  singular1stPerson: Word('повскачу', 7),
  singular2ndPerson: Word('повскачешь', 5),
  singular3rdPerson: Word('повскачет', 5),
  plural1stPerson: Word('повскачем', 5),
  plural2ndPerson: Word('повскачете', 5),
  plural3rdPerson: Word('повскачут', 5),
  masculinePast: Word('повскакал', 7),
  femininePast: Word('повскакала', 7),
  neuterPast: Word('повскакало', 7),
  pluralPast: Word('повскакали', 7),
  imperativeInformal: Word('повскачи', 7),
  imperativeFormal: Word('повскачите', 7),
  imperfect: [],
};

perfectVerbs.set(повскакать.name.text, повскакать);

export { повскакать };