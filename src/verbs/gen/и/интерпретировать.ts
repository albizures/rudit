import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интерпретировать: PerfectVerb = {
  name: Word('интерпретировать', 9),
  singular1stPerson: Word('интерпретирую', 9),
  singular2ndPerson: Word('интерпретируешь', 9),
  singular3rdPerson: Word('интерпретирует', 9),
  plural1stPerson: Word('интерпретируем', 9),
  plural2ndPerson: Word('интерпретируете', 9),
  plural3rdPerson: Word('интерпретируют', 9),
  masculinePast: Word('интерпретировал', 9),
  femininePast: Word('интерпретировала', 9),
  neuterPast: Word('интерпретировало', 9),
  pluralPast: Word('интерпретировали', 9),
  imperativeInformal: Word('интерпретируй', 9),
  imperativeFormal: Word('интерпретируйте', 9),
  imperfect: [],
};

perfectVerbs.set(интерпретировать.name.text, интерпретировать);

export { интерпретировать };