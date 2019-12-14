import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повышать: PerfectVerb = {
  name: Word('повышать', 5),
  singular1stPerson: Word('повышаю', 5),
  singular2ndPerson: Word('повышаешь', 5),
  singular3rdPerson: Word('повышает', 5),
  plural1stPerson: Word('повышаем', 5),
  plural2ndPerson: Word('повышаете', 5),
  plural3rdPerson: Word('повышают', 5),
  masculinePast: Word('повышал', 5),
  femininePast: Word('повышала', 5),
  neuterPast: Word('повышало', 5),
  pluralPast: Word('повышали', 5),
  imperativeInformal: Word('повышай', 5),
  imperativeFormal: Word('повышайте', 5),
  imperfect: [],
};

perfectVerbs.set(повышать.name.text, повышать);

export { повышать };