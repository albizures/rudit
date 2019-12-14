import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заскакать: PerfectVerb = {
  name: Word('заскакать', 6),
  singular1stPerson: Word('заскачу', 6),
  singular2ndPerson: Word('заскачешь', 4),
  singular3rdPerson: Word('заскачет', 4),
  plural1stPerson: Word('заскачем', 4),
  plural2ndPerson: Word('заскачете', 4),
  plural3rdPerson: Word('заскачут', 4),
  masculinePast: Word('заскакал', 6),
  femininePast: Word('заскакала', 6),
  neuterPast: Word('заскакало', 6),
  pluralPast: Word('заскакали', 6),
  imperativeInformal: Word('заскачи', 6),
  imperativeFormal: Word('заскачите', 6),
  imperfect: [],
};

perfectVerbs.set(заскакать.name.text, заскакать);

export { заскакать };