import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выехать: PerfectVerb = {
  name: Word('выехать', 1),
  singular1stPerson: Word('выеду', 1),
  singular2ndPerson: Word('выедешь', 1),
  singular3rdPerson: Word('выедет', 1),
  plural1stPerson: Word('выедем', 1),
  plural2ndPerson: Word('выедете', 1),
  plural3rdPerson: Word('выедут', 1),
  masculinePast: Word('выехал', 1),
  femininePast: Word('выехала', 1),
  neuterPast: Word('выехало', 1),
  pluralPast: Word('выехали', 1),
  imperativeInformal: Word('выезжай', 5),
  imperativeFormal: Word('выезжайте', 5),
  imperfect: ['выезжать'],
};

perfectVerbs.set(выехать.name.text, выехать);

export { выехать };