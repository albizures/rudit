import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересказать: PerfectVerb = {
  name: Word('пересказать', 8),
  singular1stPerson: Word('перескажу', 8),
  singular2ndPerson: Word('перескажешь', 6),
  singular3rdPerson: Word('перескажет', 6),
  plural1stPerson: Word('перескажем', 6),
  plural2ndPerson: Word('перескажете', 6),
  plural3rdPerson: Word('перескажут', 6),
  masculinePast: Word('пересказал', 8),
  femininePast: Word('пересказала', 8),
  neuterPast: Word('пересказало', 8),
  pluralPast: Word('пересказали', 8),
  imperativeInformal: Word('перескажи', 8),
  imperativeFormal: Word('перескажите', 8),
  imperfect: [],
};

perfectVerbs.set(пересказать.name.text, пересказать);

export { пересказать };