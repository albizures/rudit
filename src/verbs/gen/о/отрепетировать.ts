import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрепетировать: PerfectVerb = {
  name: Word('отрепетировать', 7),
  singular1stPerson: Word('отрепетирую', 7),
  singular2ndPerson: Word('отрепетируешь', 7),
  singular3rdPerson: Word('отрепетирует', 7),
  plural1stPerson: Word('отрепетируем', 7),
  plural2ndPerson: Word('отрепетируете', 7),
  plural3rdPerson: Word('отрепетируют', 7),
  masculinePast: Word('отрепетировал', 7),
  femininePast: Word('отрепетировала', 7),
  neuterPast: Word('отрепетировало', 7),
  pluralPast: Word('отрепетировали', 7),
  imperativeInformal: Word('отрепетируй', 7),
  imperativeFormal: Word('отрепетируйте', 7),
  imperfect: [],
};

perfectVerbs.set(отрепетировать.name.text, отрепетировать);

export { отрепетировать };