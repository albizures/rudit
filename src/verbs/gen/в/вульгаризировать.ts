import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вульгаризировать: PerfectVerb = {
  name: Word('вульгаризировать', 9),
  singular1stPerson: Word('вульгаризирую', 9),
  singular2ndPerson: Word('вульгаризируешь', 9),
  singular3rdPerson: Word('вульгаризирует', 9),
  plural1stPerson: Word('вульгаризируем', 9),
  plural2ndPerson: Word('вульгаризируете', 9),
  plural3rdPerson: Word('вульгаризируют', 9),
  masculinePast: Word('вульгаризировал', 9),
  femininePast: Word('вульгаризировала', 9),
  neuterPast: Word('вульгаризировало', 9),
  pluralPast: Word('вульгаризировали', 9),
  imperativeInformal: Word('вульгаризируй', 9),
  imperativeFormal: Word('вульгаризируйте', 9),
  imperfect: [],
};

perfectVerbs.set(вульгаризировать.name.text, вульгаризировать);

export { вульгаризировать };