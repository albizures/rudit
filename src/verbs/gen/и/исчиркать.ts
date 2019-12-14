import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчиркать: PerfectVerb = {
  name: Word('исчиркать', 3),
  singular1stPerson: Word('исчиркаю', 3),
  singular2ndPerson: Word('исчиркаешь', 3),
  singular3rdPerson: Word('исчиркает', 3),
  plural1stPerson: Word('исчиркаем', 3),
  plural2ndPerson: Word('исчиркаете', 3),
  plural3rdPerson: Word('исчиркают', 3),
  masculinePast: Word('исчиркал', 3),
  femininePast: Word('исчиркала', 3),
  neuterPast: Word('исчиркало', 3),
  pluralPast: Word('исчиркали', 3),
  imperativeInformal: Word('исчиркай', 3),
  imperativeFormal: Word('исчиркайте', 3),
  imperfect: [],
};

perfectVerbs.set(исчиркать.name.text, исчиркать);

export { исчиркать };