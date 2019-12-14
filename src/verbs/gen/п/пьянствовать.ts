import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пьянствовать: PerfectVerb = {
  name: Word('пьянствовать', 2),
  singular1stPerson: Word('пьянствую', 2),
  singular2ndPerson: Word('пьянствуешь', 2),
  singular3rdPerson: Word('пьянствует', 2),
  plural1stPerson: Word('пьянствуем', 2),
  plural2ndPerson: Word('пьянствуете', 2),
  plural3rdPerson: Word('пьянствуют', 2),
  masculinePast: Word('пьянствовал', 2),
  femininePast: Word('пьянствовала', 2),
  neuterPast: Word('пьянствовало', 2),
  pluralPast: Word('пьянствовали', 2),
  imperativeInformal: Word('пьянствуй', 2),
  imperativeFormal: Word('пьянствуйте', 2),
  imperfect: [],
};

perfectVerbs.set(пьянствовать.name.text, пьянствовать);

export { пьянствовать };