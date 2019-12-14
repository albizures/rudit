import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рикошетировать: PerfectVerb = {
  name: Word('рикошетировать', 7),
  singular1stPerson: Word('рикошетирую', 7),
  singular2ndPerson: Word('рикошетируешь', 7),
  singular3rdPerson: Word('рикошетирует', 7),
  plural1stPerson: Word('рикошетируем', 7),
  plural2ndPerson: Word('рикошетируете', 7),
  plural3rdPerson: Word('рикошетируют', 7),
  masculinePast: Word('рикошетировал', 7),
  femininePast: Word('рикошетировала', 7),
  neuterPast: Word('рикошетировало', 7),
  pluralPast: Word('рикошетировали', 7),
  imperativeInformal: Word('рикошетируй', 7),
  imperativeFormal: Word('рикошетируйте', 7),
  imperfect: [],
};

perfectVerbs.set(рикошетировать.name.text, рикошетировать);

export { рикошетировать };