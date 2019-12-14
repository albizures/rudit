import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объехать: PerfectVerb = {
  name: Word('объехать', 3),
  singular1stPerson: Word('объеду', 3),
  singular2ndPerson: Word('объедешь', 3),
  singular3rdPerson: Word('объедет', 3),
  plural1stPerson: Word('объедем', 3),
  plural2ndPerson: Word('объедете', 3),
  plural3rdPerson: Word('объедут', 3),
  masculinePast: Word('объехал', 3),
  femininePast: Word('объехала', 3),
  neuterPast: Word('объехало', 3),
  pluralPast: Word('объехали', 3),
  imperativeInformal: Word('объезжай', 6),
  imperativeFormal: Word('объезжайте', 6),
  imperfect: ['объезжать'],
};

perfectVerbs.set(объехать.name.text, объехать);

export { объехать };