import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const эвакуировать: PerfectVerb = {
  name: Word('эвакуировать', 5),
  singular1stPerson: Word('эвакуирую', 5),
  singular2ndPerson: Word('эвакуируешь', 5),
  singular3rdPerson: Word('эвакуирует', 5),
  plural1stPerson: Word('эвакуируем', 5),
  plural2ndPerson: Word('эвакуируете', 5),
  plural3rdPerson: Word('эвакуируют', 5),
  masculinePast: Word('эвакуировал', 5),
  femininePast: Word('эвакуировала', 5),
  neuterPast: Word('эвакуировало', 5),
  pluralPast: Word('эвакуировали', 5),
  imperativeInformal: Word('эвакуируй', 5),
  imperativeFormal: Word('эвакуируйте', 5),
  imperfect: [],
};

perfectVerbs.set(эвакуировать.name.text, эвакуировать);

export { эвакуировать };