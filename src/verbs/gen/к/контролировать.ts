import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const контролировать: PerfectVerb = {
  name: Word('контролировать', 7),
  singular1stPerson: Word('контролирую', 7),
  singular2ndPerson: Word('контролируешь', 7),
  singular3rdPerson: Word('контролирует', 7),
  plural1stPerson: Word('контролируем', 7),
  plural2ndPerson: Word('контролируете', 7),
  plural3rdPerson: Word('контролируют', 7),
  masculinePast: Word('контролировал', 7),
  femininePast: Word('контролировала', 7),
  neuterPast: Word('контролировало', 7),
  pluralPast: Word('контролировали', 7),
  imperativeInformal: Word('контролируй', 7),
  imperativeFormal: Word('контролируйте', 7),
  imperfect: [],
};

perfectVerbs.set(контролировать.name.text, контролировать);

export { контролировать };