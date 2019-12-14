import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поскакать: PerfectVerb = {
  name: Word('поскакать', 6),
  singular1stPerson: Word('поскачу', 6),
  singular2ndPerson: Word('поскачешь', 4),
  singular3rdPerson: Word('поскачет', 4),
  plural1stPerson: Word('поскачем', 4),
  plural2ndPerson: Word('поскачете', 4),
  plural3rdPerson: Word('поскачут', 4),
  masculinePast: Word('поскакал', 6),
  femininePast: Word('поскакала', 6),
  neuterPast: Word('поскакало', 6),
  pluralPast: Word('поскакали', 6),
  imperativeInformal: Word('поскачи', 6),
  imperativeFormal: Word('поскачите', 6),
  imperfect: [],
};

perfectVerbs.set(поскакать.name.text, поскакать);

export { поскакать };