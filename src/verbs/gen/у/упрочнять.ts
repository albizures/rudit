import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрочнять: PerfectVerb = {
  name: Word('упрочнять', 6),
  singular1stPerson: Word('упрочняю', 6),
  singular2ndPerson: Word('упрочняешь', 6),
  singular3rdPerson: Word('упрочняет', 6),
  plural1stPerson: Word('упрочняем', 6),
  plural2ndPerson: Word('упрочняете', 6),
  plural3rdPerson: Word('упрочняют', 6),
  masculinePast: Word('упрочнял', 6),
  femininePast: Word('упрочняла', 6),
  neuterPast: Word('упрочняло', 6),
  pluralPast: Word('упрочняли', 6),
  imperativeInformal: Word('упрочняй', 6),
  imperativeFormal: Word('упрочняйте', 6),
  imperfect: [],
};

perfectVerbs.set(упрочнять.name.text, упрочнять);

export { упрочнять };