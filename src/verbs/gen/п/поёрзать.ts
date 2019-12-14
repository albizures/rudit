import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поёрзать: PerfectVerb = {
  name: Word('поёрзать', 2),
  singular1stPerson: Word('поёрзаю', 2),
  singular2ndPerson: Word('поёрзаешь', 2),
  singular3rdPerson: Word('поёрзает', 2),
  plural1stPerson: Word('поёрзаем', 2),
  plural2ndPerson: Word('поёрзаете', 2),
  plural3rdPerson: Word('поёрзают', 2),
  masculinePast: Word('поёрзал', 2),
  femininePast: Word('поёрзала', 2),
  neuterPast: Word('поёрзало', 2),
  pluralPast: Word('поёрзали', 2),
  imperativeInformal: Word('поёрзай', 2),
  imperativeFormal: Word('поёрзайте', 2),
  imperfect: [],
};

perfectVerbs.set(поёрзать.name.text, поёрзать);

export { поёрзать };