import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исполнять: PerfectVerb = {
  name: Word('исполнять', 6),
  singular1stPerson: Word('исполняю', 6),
  singular2ndPerson: Word('исполняешь', 6),
  singular3rdPerson: Word('исполняет', 6),
  plural1stPerson: Word('исполняем', 6),
  plural2ndPerson: Word('исполняете', 6),
  plural3rdPerson: Word('исполняют', 6),
  masculinePast: Word('исполнял', 6),
  femininePast: Word('исполняла', 6),
  neuterPast: Word('исполняло', 6),
  pluralPast: Word('исполняли', 6),
  imperativeInformal: Word('исполняй', 6),
  imperativeFormal: Word('исполняйте', 6),
  imperfect: ['исполнить'],
};

perfectVerbs.set(исполнять.name.text, исполнять);

export { исполнять };