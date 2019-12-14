import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проинструктировать: PerfectVerb = {
  name: Word('проинструктировать', 11),
  singular1stPerson: Word('проинструктирую', 11),
  singular2ndPerson: Word('проинструктируешь', 11),
  singular3rdPerson: Word('проинструктирует', 11),
  plural1stPerson: Word('проинструктируем', 11),
  plural2ndPerson: Word('проинструктируете', 11),
  plural3rdPerson: Word('проинструктируют', 11),
  masculinePast: Word('проинструктировал', 11),
  femininePast: Word('проинструктировала', 11),
  neuterPast: Word('проинструктировало', 11),
  pluralPast: Word('проинструктировали', 11),
  imperativeInformal: Word('проинструктируй', 11),
  imperativeFormal: Word('проинструктируйте', 11),
  imperfect: [],
};

perfectVerbs.set(проинструктировать.name.text, проинструктировать);

export { проинструктировать };