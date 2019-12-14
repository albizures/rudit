import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очерствлять: PerfectVerb = {
  name: Word('очерствлять', 8),
  singular1stPerson: Word('очерствляю', 8),
  singular2ndPerson: Word('очерствляешь', 8),
  singular3rdPerson: Word('очерствляет', 8),
  plural1stPerson: Word('очерствляем', 8),
  plural2ndPerson: Word('очерствляете', 8),
  plural3rdPerson: Word('очерствляют', 8),
  masculinePast: Word('очерствлял', 8),
  femininePast: Word('очерствляла', 8),
  neuterPast: Word('очерствляло', 8),
  pluralPast: Word('очерствляли', 8),
  imperativeInformal: Word('очерствляй', 8),
  imperativeFormal: Word('очерствляйте', 8),
  imperfect: [],
};

perfectVerbs.set(очерствлять.name.text, очерствлять);

export { очерствлять };