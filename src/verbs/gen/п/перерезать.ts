import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерезать: PerfectVerb = {
  name: Word('перерезать', 5),
  singular1stPerson: Word('перережу', 5),
  singular2ndPerson: Word('перережешь', 5),
  singular3rdPerson: Word('перережет', 5),
  plural1stPerson: Word('перережем', 5),
  plural2ndPerson: Word('перережете', 5),
  plural3rdPerson: Word('перережут', 5),
  masculinePast: Word('перерезал', 5),
  femininePast: Word('перерезала', 5),
  neuterPast: Word('перерезало', 5),
  pluralPast: Word('перерезали', 5),
  imperativeInformal: Word('перережь', 5),
  imperativeFormal: Word('перережьте', 5),
  imperfect: [],
};

perfectVerbs.set(перерезать.name.text, перерезать);

export { перерезать };