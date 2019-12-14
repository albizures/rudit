import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гербаризировать: PerfectVerb = {
  name: Word('гербаризировать', 8),
  singular1stPerson: Word('гербаризирую', 8),
  singular2ndPerson: Word('гербаризируешь', 8),
  singular3rdPerson: Word('гербаризирует', 8),
  plural1stPerson: Word('гербаризируем', 8),
  plural2ndPerson: Word('гербаризируете', 8),
  plural3rdPerson: Word('гербаризируют', 8),
  masculinePast: Word('гербаризировал', 8),
  femininePast: Word('гербаризировала', 8),
  neuterPast: Word('гербаризировало', 8),
  pluralPast: Word('гербаризировали', 8),
  imperativeInformal: Word('гербаризируй', 8),
  imperativeFormal: Word('гербаризируйте', 8),
  imperfect: [],
};

perfectVerbs.set(гербаризировать.name.text, гербаризировать);

export { гербаризировать };