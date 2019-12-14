import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проинформировать: PerfectVerb = {
  name: Word('проинформировать', 9),
  singular1stPerson: Word('проинформирую', 9),
  singular2ndPerson: Word('проинформируешь', 9),
  singular3rdPerson: Word('проинформирует', 9),
  plural1stPerson: Word('проинформируем', 9),
  plural2ndPerson: Word('проинформируете', 9),
  plural3rdPerson: Word('проинформируют', 9),
  masculinePast: Word('проинформировал', 9),
  femininePast: Word('проинформировала', 9),
  neuterPast: Word('проинформировало', 9),
  pluralPast: Word('проинформировали', 9),
  imperativeInformal: Word('проинформируй', 9),
  imperativeFormal: Word('проинформируйте', 9),
  imperfect: ['информировать'],
};

perfectVerbs.set(проинформировать.name.text, проинформировать);

export { проинформировать };