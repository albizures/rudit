import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const употреблять: PerfectVerb = {
  name: Word('употреблять', 8),
  singular1stPerson: Word('употребляю', 8),
  singular2ndPerson: Word('употребляешь', 8),
  singular3rdPerson: Word('употребляет', 8),
  plural1stPerson: Word('употребляем', 8),
  plural2ndPerson: Word('употребляете', 8),
  plural3rdPerson: Word('употребляют', 8),
  masculinePast: Word('употреблял', 8),
  femininePast: Word('употребляла', 8),
  neuterPast: Word('употребляло', 8),
  pluralPast: Word('употребляли', 8),
  imperativeInformal: Word('употребляй', 8),
  imperativeFormal: Word('употребляйте', 8),
  imperfect: ['употребить'],
};

perfectVerbs.set(употреблять.name.text, употреблять);

export { употреблять };