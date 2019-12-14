import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искать: PerfectVerb = {
  name: Word('искать', 3),
  singular1stPerson: Word('ищу', 2),
  singular2ndPerson: Word('ищешь', 0),
  singular3rdPerson: Word('ищет', 0),
  plural1stPerson: Word('ищем', 0),
  plural2ndPerson: Word('ищете', 0),
  plural3rdPerson: Word('ищут', 0),
  masculinePast: Word('искал', 3),
  femininePast: Word('искала', 3),
  neuterPast: Word('искало', 3),
  pluralPast: Word('искали', 3),
  imperativeInformal: Word('ищи', 2),
  imperativeFormal: Word('ищите', 2),
  imperfect: ['поискать'],
};

perfectVerbs.set(искать.name.text, искать);

export { искать };