import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевыполнять: PerfectVerb = {
  name: Word('перевыполнять', 10),
  singular1stPerson: Word('перевыполняю', 10),
  singular2ndPerson: Word('перевыполняешь', 10),
  singular3rdPerson: Word('перевыполняет', 10),
  plural1stPerson: Word('перевыполняем', 10),
  plural2ndPerson: Word('перевыполняете', 10),
  plural3rdPerson: Word('перевыполняют', 10),
  masculinePast: Word('перевыполнял', 10),
  femininePast: Word('перевыполняла', 10),
  neuterPast: Word('перевыполняло', 10),
  pluralPast: Word('перевыполняли', 10),
  imperativeInformal: Word('перевыполняй', 10),
  imperativeFormal: Word('перевыполняйте', 10),
  imperfect: [],
};

perfectVerbs.set(перевыполнять.name.text, перевыполнять);

export { перевыполнять };