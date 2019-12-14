import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спровоцировать: PerfectVerb = {
  name: Word('спровоцировать', 7),
  singular1stPerson: Word('спровоцирую', 7),
  singular2ndPerson: Word('спровоцируешь', 7),
  singular3rdPerson: Word('спровоцирует', 7),
  plural1stPerson: Word('спровоцируем', 7),
  plural2ndPerson: Word('спровоцируете', 7),
  plural3rdPerson: Word('спровоцируют', 7),
  masculinePast: Word('спровоцировал', 7),
  femininePast: Word('спровоцировала', 7),
  neuterPast: Word('спровоцировало', 7),
  pluralPast: Word('спровоцировали', 7),
  imperativeInformal: Word('спровоцируй', 7),
  imperativeFormal: Word('спровоцируйте', 7),
  imperfect: ['провоцировать'],
};

perfectVerbs.set(спровоцировать.name.text, спровоцировать);

export { спровоцировать };