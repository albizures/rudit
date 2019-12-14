import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истреблять: PerfectVerb = {
  name: Word('истреблять', 7),
  singular1stPerson: Word('истребляю', 7),
  singular2ndPerson: Word('истребляешь', 7),
  singular3rdPerson: Word('истребляет', 7),
  plural1stPerson: Word('истребляем', 7),
  plural2ndPerson: Word('истребляете', 7),
  plural3rdPerson: Word('истребляют', 7),
  masculinePast: Word('истреблял', 7),
  femininePast: Word('истребляла', 7),
  neuterPast: Word('истребляло', 7),
  pluralPast: Word('истребляли', 7),
  imperativeInformal: Word('истребляй', 7),
  imperativeFormal: Word('истребляйте', 7),
  imperfect: ['истребить'],
};

perfectVerbs.set(истреблять.name.text, истреблять);

export { истреблять };