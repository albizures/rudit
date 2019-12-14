import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убежать: PerfectVerb = {
  name: Word('убежать', 4),
  singular1stPerson: Word('убегу', 4),
  singular2ndPerson: Word('убежишь', 4),
  singular3rdPerson: Word('убежит', 4),
  plural1stPerson: Word('убежим', 4),
  plural2ndPerson: Word('убежите', 4),
  plural3rdPerson: Word('убегут', 4),
  masculinePast: Word('убежал', 4),
  femininePast: Word('убежала', 4),
  neuterPast: Word('убежало', 4),
  pluralPast: Word('убежали', 4),
  imperativeInformal: Word('убеги', 4),
  imperativeFormal: Word('убегите', 4),
  imperfect: ['убегать'],
};

perfectVerbs.set(убежать.name.text, убежать);

export { убежать };