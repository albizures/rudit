import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const субстантивировать: PerfectVerb = {
  name: Word('субстантивировать', 10),
  singular1stPerson: Word('субстантивирую', 10),
  singular2ndPerson: Word('субстантивируешь', 10),
  singular3rdPerson: Word('субстантивирует', 10),
  plural1stPerson: Word('субстантивируем', 10),
  plural2ndPerson: Word('субстантивируете', 10),
  plural3rdPerson: Word('субстантивируют', 10),
  masculinePast: Word('субстантивировал', 10),
  femininePast: Word('субстантивировала', 10),
  neuterPast: Word('субстантивировало', 10),
  pluralPast: Word('субстантивировали', 10),
  imperativeInformal: Word('субстантивируй', 10),
  imperativeFormal: Word('субстантивируйте', 10),
  imperfect: [],
};

perfectVerbs.set(субстантивировать.name.text, субстантивировать);

export { субстантивировать };