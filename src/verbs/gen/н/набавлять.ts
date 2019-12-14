import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набавлять: PerfectVerb = {
  name: Word('набавлять', 6),
  singular1stPerson: Word('набавляю', 6),
  singular2ndPerson: Word('набавляешь', 6),
  singular3rdPerson: Word('набавляет', 6),
  plural1stPerson: Word('набавляем', 6),
  plural2ndPerson: Word('набавляете', 6),
  plural3rdPerson: Word('набавляют', 6),
  masculinePast: Word('набавлял', 6),
  femininePast: Word('набавляла', 6),
  neuterPast: Word('набавляло', 6),
  pluralPast: Word('набавляли', 6),
  imperativeInformal: Word('набавляй', 6),
  imperativeFormal: Word('набавляйте', 6),
  imperfect: [],
};

perfectVerbs.set(набавлять.name.text, набавлять);

export { набавлять };