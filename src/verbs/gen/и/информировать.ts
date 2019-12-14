import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const информировать: PerfectVerb = {
  name: Word('информировать', 6),
  singular1stPerson: Word('информирую', 6),
  singular2ndPerson: Word('информируешь', 6),
  singular3rdPerson: Word('информирует', 6),
  plural1stPerson: Word('информируем', 6),
  plural2ndPerson: Word('информируете', 6),
  plural3rdPerson: Word('информируют', 6),
  masculinePast: Word('информировал', 6),
  femininePast: Word('информировала', 6),
  neuterPast: Word('информировало', 6),
  pluralPast: Word('информировали', 6),
  imperativeInformal: Word('информируй', 6),
  imperativeFormal: Word('информируйте', 6),
  imperfect: ['проинформировать'],
};

perfectVerbs.set(информировать.name.text, информировать);

export { информировать };