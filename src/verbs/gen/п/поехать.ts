import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поехать: PerfectVerb = {
  name: Word('поехать', 2),
  singular1stPerson: Word('поеду', 2),
  singular2ndPerson: Word('поедешь', 2),
  singular3rdPerson: Word('поедет', 2),
  plural1stPerson: Word('поедем', 2),
  plural2ndPerson: Word('поедете', 2),
  plural3rdPerson: Word('поедут', 2),
  masculinePast: Word('поехал', 2),
  femininePast: Word('поехала', 2),
  neuterPast: Word('поехало', 2),
  pluralPast: Word('поехали', 2),
  imperativeInformal: Word('поезжай', 5),
  imperativeFormal: Word('поезжайте', 5),
  imperfect: ['ехать'],
};

perfectVerbs.set(поехать.name.text, поехать);

export { поехать };