import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоделать: PerfectVerb = {
  name: Word('недоделать', 5),
  singular1stPerson: Word('недоделаю', 5),
  singular2ndPerson: Word('недоделаешь', 5),
  singular3rdPerson: Word('недоделает', 5),
  plural1stPerson: Word('недоделаем', 5),
  plural2ndPerson: Word('недоделаете', 5),
  plural3rdPerson: Word('недоделают', 5),
  masculinePast: Word('недоделал', 5),
  femininePast: Word('недоделала', 5),
  neuterPast: Word('недоделало', 5),
  pluralPast: Word('недоделали', 5),
  imperativeInformal: Word('недоделай', 5),
  imperativeFormal: Word('недоделайте', 5),
  imperfect: [],
};

perfectVerbs.set(недоделать.name.text, недоделать);

export { недоделать };