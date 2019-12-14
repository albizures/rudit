import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доскакать: PerfectVerb = {
  name: Word('доскакать', 6),
  singular1stPerson: Word('доскачу', 6),
  singular2ndPerson: Word('доскачешь', 4),
  singular3rdPerson: Word('доскачет', 4),
  plural1stPerson: Word('доскачем', 4),
  plural2ndPerson: Word('доскачете', 4),
  plural3rdPerson: Word('доскачут', 4),
  masculinePast: Word('доскакал', 6),
  femininePast: Word('доскакала', 6),
  neuterPast: Word('доскакало', 6),
  pluralPast: Word('доскакали', 6),
  imperativeInformal: Word('доскачи', 6),
  imperativeFormal: Word('доскачите', 6),
  imperfect: [],
};

perfectVerbs.set(доскакать.name.text, доскакать);

export { доскакать };