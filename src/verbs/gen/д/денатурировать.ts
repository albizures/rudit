import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const денатурировать: PerfectVerb = {
  name: Word('денатурировать', 7),
  singular1stPerson: Word('денатурирую', 7),
  singular2ndPerson: Word('денатурируешь', 7),
  singular3rdPerson: Word('денатурирует', 7),
  plural1stPerson: Word('денатурируем', 7),
  plural2ndPerson: Word('денатурируете', 7),
  plural3rdPerson: Word('денатурируют', 7),
  masculinePast: Word('денатурировал', 7),
  femininePast: Word('денатурировала', 7),
  neuterPast: Word('денатурировало', 7),
  pluralPast: Word('денатурировали', 7),
  imperativeInformal: Word('денатурируй', 7),
  imperativeFormal: Word('денатурируйте', 7),
  imperfect: [],
};

perfectVerbs.set(денатурировать.name.text, денатурировать);

export { денатурировать };