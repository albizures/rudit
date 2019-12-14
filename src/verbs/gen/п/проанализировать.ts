import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проанализировать: PerfectVerb = {
  name: Word('проанализировать', 9),
  singular1stPerson: Word('проанализирую', 9),
  singular2ndPerson: Word('проанализируешь', 9),
  singular3rdPerson: Word('проанализирует', 9),
  plural1stPerson: Word('проанализируем', 9),
  plural2ndPerson: Word('проанализируете', 9),
  plural3rdPerson: Word('проанализируют', 9),
  masculinePast: Word('проанализировал', 9),
  femininePast: Word('проанализировала', 9),
  neuterPast: Word('проанализировало', 9),
  pluralPast: Word('проанализировали', 9),
  imperativeInformal: Word('проанализируй', 9),
  imperativeFormal: Word('проанализируйте', 9),
  imperfect: [],
};

perfectVerbs.set(проанализировать.name.text, проанализировать);

export { проанализировать };