import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const анализировать: PerfectVerb = {
  name: Word('анализировать', 6),
  singular1stPerson: Word('анализирую', 6),
  singular2ndPerson: Word('анализируешь', 6),
  singular3rdPerson: Word('анализирует', 6),
  plural1stPerson: Word('анализируем', 6),
  plural2ndPerson: Word('анализируете', 6),
  plural3rdPerson: Word('анализируют', 6),
  masculinePast: Word('анализировал', 6),
  femininePast: Word('анализировала', 6),
  neuterPast: Word('анализировало', 6),
  pluralPast: Word('анализировали', 6),
  imperativeInformal: Word('анализируй', 6),
  imperativeFormal: Word('анализируйте', 6),
  imperfect: ['проанализировать'],
};

perfectVerbs.set(анализировать.name.text, анализировать);

export { анализировать };