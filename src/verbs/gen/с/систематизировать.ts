import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const систематизировать: PerfectVerb = {
  name: Word('систематизировать', 10),
  singular1stPerson: Word('систематизирую', 10),
  singular2ndPerson: Word('систематизируешь', 10),
  singular3rdPerson: Word('систематизирует', 10),
  plural1stPerson: Word('систематизируем', 10),
  plural2ndPerson: Word('систематизируете', 10),
  plural3rdPerson: Word('систематизируют', 10),
  masculinePast: Word('систематизировал', 10),
  femininePast: Word('систематизировала', 10),
  neuterPast: Word('систематизировало', 10),
  pluralPast: Word('систематизировали', 10),
  imperativeInformal: Word('систематизируй', 10),
  imperativeFormal: Word('систематизируйте', 10),
  imperfect: [],
};

perfectVerbs.set(систематизировать.name.text, систематизировать);

export { систематизировать };