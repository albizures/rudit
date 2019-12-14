import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const терзать: PerfectVerb = {
  name: Word('терзать', 4),
  singular1stPerson: Word('терзаю', 4),
  singular2ndPerson: Word('терзаешь', 4),
  singular3rdPerson: Word('терзает', 4),
  plural1stPerson: Word('терзаем', 4),
  plural2ndPerson: Word('терзаете', 4),
  plural3rdPerson: Word('терзают', 4),
  masculinePast: Word('терзал', 4),
  femininePast: Word('терзала', 4),
  neuterPast: Word('терзало', 4),
  pluralPast: Word('терзали', 4),
  imperativeInformal: Word('терзай', 4),
  imperativeFormal: Word('терзайте', 4),
  imperfect: [],
};

perfectVerbs.set(терзать.name.text, терзать);

export { терзать };