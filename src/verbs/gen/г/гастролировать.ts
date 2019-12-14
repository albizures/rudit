import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гастролировать: PerfectVerb = {
  name: Word('гастролировать', 7),
  singular1stPerson: Word('гастролирую', 7),
  singular2ndPerson: Word('гастролируешь', 7),
  singular3rdPerson: Word('гастролирует', 7),
  plural1stPerson: Word('гастролируем', 7),
  plural2ndPerson: Word('гастролируете', 7),
  plural3rdPerson: Word('гастролируют', 7),
  masculinePast: Word('гастролировал', 7),
  femininePast: Word('гастролировала', 7),
  neuterPast: Word('гастролировало', 7),
  pluralPast: Word('гастролировали', 7),
  imperativeInformal: Word('гастролируй', 7),
  imperativeFormal: Word('гастролируйте', 7),
  imperfect: [],
};

perfectVerbs.set(гастролировать.name.text, гастролировать);

export { гастролировать };