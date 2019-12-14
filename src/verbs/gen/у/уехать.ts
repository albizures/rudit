import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уехать: PerfectVerb = {
  name: Word('уехать', 1),
  singular1stPerson: Word('уеду', 1),
  singular2ndPerson: Word('уедешь', 1),
  singular3rdPerson: Word('уедет', 1),
  plural1stPerson: Word('уедем', 1),
  plural2ndPerson: Word('уедете', 1),
  plural3rdPerson: Word('уедут', 1),
  masculinePast: Word('уехал', 1),
  femininePast: Word('уехала', 1),
  neuterPast: Word('уехало', 1),
  pluralPast: Word('уехали', 1),
  imperativeInformal: Word('уезжай', 4),
  imperativeFormal: Word('уезжайте', 4),
  imperfect: ['уезжать'],
};

perfectVerbs.set(уехать.name.text, уехать);

export { уехать };