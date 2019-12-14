import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проехать: PerfectVerb = {
  name: Word('проехать', 3),
  singular1stPerson: Word('проеду', 3),
  singular2ndPerson: Word('проедешь', 3),
  singular3rdPerson: Word('проедет', 3),
  plural1stPerson: Word('проедем', 3),
  plural2ndPerson: Word('проедете', 3),
  plural3rdPerson: Word('проедут', 3),
  masculinePast: Word('проехал', 3),
  femininePast: Word('проехала', 3),
  neuterPast: Word('проехало', 3),
  pluralPast: Word('проехали', 3),
  imperativeInformal: Word('проезжай', 6),
  imperativeFormal: Word('проезжайте', 6),
  imperfect: ['проезжать'],
};

perfectVerbs.set(проехать.name.text, проехать);

export { проехать };