import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заполнять: PerfectVerb = {
  name: Word('заполнять', 6),
  singular1stPerson: Word('заполняю', 6),
  singular2ndPerson: Word('заполняешь', 6),
  singular3rdPerson: Word('заполняет', 6),
  plural1stPerson: Word('заполняем', 6),
  plural2ndPerson: Word('заполняете', 6),
  plural3rdPerson: Word('заполняют', 6),
  masculinePast: Word('заполнял', 6),
  femininePast: Word('заполняла', 6),
  neuterPast: Word('заполняло', 6),
  pluralPast: Word('заполняли', 6),
  imperativeInformal: Word('заполняй', 6),
  imperativeFormal: Word('заполняйте', 6),
  imperfect: ['заполнить'],
};

perfectVerbs.set(заполнять.name.text, заполнять);

export { заполнять };