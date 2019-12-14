import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проскакать: PerfectVerb = {
  name: Word('проскакать', 7),
  singular1stPerson: Word('проскачу', 7),
  singular2ndPerson: Word('проскачешь', 5),
  singular3rdPerson: Word('проскачет', 5),
  plural1stPerson: Word('проскачем', 5),
  plural2ndPerson: Word('проскачете', 5),
  plural3rdPerson: Word('проскачут', 5),
  masculinePast: Word('проскакал', 7),
  femininePast: Word('проскакала', 7),
  neuterPast: Word('проскакало', 7),
  pluralPast: Word('проскакали', 7),
  imperativeInformal: Word('проскачи', 7),
  imperativeFormal: Word('проскачите', 7),
  imperfect: [],
};

perfectVerbs.set(проскакать.name.text, проскакать);

export { проскакать };