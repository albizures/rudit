import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поёрзать: PerfectVerb = {
  name: Word('поёрзать', 5),
  singular1stPerson: Word('поёрзаю', 5),
  singular2ndPerson: Word('поёрзаешь', 5),
  singular3rdPerson: Word('поёрзает', 5),
  plural1stPerson: Word('поёрзаем', 5),
  plural2ndPerson: Word('поёрзаете', 5),
  plural3rdPerson: Word('поёрзают', 5),
  masculinePast: Word('поёрзал', 5),
  femininePast: Word('поёрзала', 5),
  neuterPast: Word('поёрзало', 5),
  pluralPast: Word('поёрзали', 5),
  imperativeInformal: Word('поёрзай', 5),
  imperativeFormal: Word('поёрзайте', 5),
  imperfect: [],
};

perfectVerbs.set(поёрзать.name.text, поёрзать);

export { поёрзать };