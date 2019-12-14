import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отскакать: PerfectVerb = {
  name: Word('отскакать', 6),
  singular1stPerson: Word('отскачу', 6),
  singular2ndPerson: Word('отскачешь', 4),
  singular3rdPerson: Word('отскачет', 4),
  plural1stPerson: Word('отскачем', 4),
  plural2ndPerson: Word('отскачете', 4),
  plural3rdPerson: Word('отскачут', 4),
  masculinePast: Word('отскакал', 6),
  femininePast: Word('отскакала', 6),
  neuterPast: Word('отскакало', 6),
  pluralPast: Word('отскакали', 6),
  imperativeInformal: Word('отскачи', 6),
  imperativeFormal: Word('отскачите', 6),
  imperfect: [],
};

perfectVerbs.set(отскакать.name.text, отскакать);

export { отскакать };