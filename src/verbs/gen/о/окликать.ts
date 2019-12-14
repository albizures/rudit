import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окликать: PerfectVerb = {
  name: Word('окликать', 5),
  singular1stPerson: Word('окликаю', 5),
  singular2ndPerson: Word('окликаешь', 5),
  singular3rdPerson: Word('окликает', 5),
  plural1stPerson: Word('окликаем', 5),
  plural2ndPerson: Word('окликаете', 5),
  plural3rdPerson: Word('окликают', 5),
  masculinePast: Word('окликал', 5),
  femininePast: Word('окликала', 5),
  neuterPast: Word('окликало', 5),
  pluralPast: Word('окликали', 5),
  imperativeInformal: Word('окликай', 5),
  imperativeFormal: Word('окликайте', 5),
  imperfect: [],
};

perfectVerbs.set(окликать.name.text, окликать);

export { окликать };