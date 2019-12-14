import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проштудировать: PerfectVerb = {
  name: Word('проштудировать', 7),
  singular1stPerson: Word('проштудирую', 7),
  singular2ndPerson: Word('проштудируешь', 7),
  singular3rdPerson: Word('проштудирует', 7),
  plural1stPerson: Word('проштудируем', 7),
  plural2ndPerson: Word('проштудируете', 7),
  plural3rdPerson: Word('проштудируют', 7),
  masculinePast: Word('проштудировал', 7),
  femininePast: Word('проштудировала', 7),
  neuterPast: Word('проштудировало', 7),
  pluralPast: Word('проштудировали', 7),
  imperativeInformal: Word('проштудируй', 7),
  imperativeFormal: Word('проштудируйте', 7),
  imperfect: [],
};

perfectVerbs.set(проштудировать.name.text, проштудировать);

export { проштудировать };