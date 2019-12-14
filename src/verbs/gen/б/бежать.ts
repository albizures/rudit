import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бежать: PerfectVerb = {
  name: Word('бежать', 3),
  singular1stPerson: Word('бегу', 3),
  singular2ndPerson: Word('бежишь', 3),
  singular3rdPerson: Word('бежит', 3),
  plural1stPerson: Word('бежим', 3),
  plural2ndPerson: Word('бежите', 3),
  plural3rdPerson: Word('бегут', 3),
  masculinePast: Word('бежал', 3),
  femininePast: Word('бежала', 3),
  neuterPast: Word('бежало', 3),
  pluralPast: Word('бежали', 3),
  imperativeInformal: Word('беги', 3),
  imperativeFormal: Word('бегите', 3),
  imperfect: ['побежать'],
};

perfectVerbs.set(бежать.name.text, бежать);

export { бежать };