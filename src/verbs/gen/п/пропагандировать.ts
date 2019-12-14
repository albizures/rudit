import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропагандировать: PerfectVerb = {
  name: Word('пропагандировать', 9),
  singular1stPerson: Word('пропагандирую', 9),
  singular2ndPerson: Word('пропагандируешь', 9),
  singular3rdPerson: Word('пропагандирует', 9),
  plural1stPerson: Word('пропагандируем', 9),
  plural2ndPerson: Word('пропагандируете', 9),
  plural3rdPerson: Word('пропагандируют', 9),
  masculinePast: Word('пропагандировал', 9),
  femininePast: Word('пропагандировала', 9),
  neuterPast: Word('пропагандировало', 9),
  pluralPast: Word('пропагандировали', 9),
  imperativeInformal: Word('пропагандируй', 9),
  imperativeFormal: Word('пропагандируйте', 9),
  imperfect: [],
};

perfectVerbs.set(пропагандировать.name.text, пропагандировать);

export { пропагандировать };