import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отделать: PerfectVerb = {
  name: Word('отделать', 3),
  singular1stPerson: Word('отделаю', 3),
  singular2ndPerson: Word('отделаешь', 3),
  singular3rdPerson: Word('отделает', 3),
  plural1stPerson: Word('отделаем', 3),
  plural2ndPerson: Word('отделаете', 3),
  plural3rdPerson: Word('отделают', 3),
  masculinePast: Word('отделал', 3),
  femininePast: Word('отделала', 3),
  neuterPast: Word('отделало', 3),
  pluralPast: Word('отделали', 3),
  imperativeInformal: Word('отделай', 3),
  imperativeFormal: Word('отделайте', 3),
  imperfect: [],
};

perfectVerbs.set(отделать.name.text, отделать);

export { отделать };