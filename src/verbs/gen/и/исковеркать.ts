import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исковеркать: PerfectVerb = {
  name: Word('исковеркать', 5),
  singular1stPerson: Word('исковеркаю', 5),
  singular2ndPerson: Word('исковеркаешь', 5),
  singular3rdPerson: Word('исковеркает', 5),
  plural1stPerson: Word('исковеркаем', 5),
  plural2ndPerson: Word('исковеркаете', 5),
  plural3rdPerson: Word('исковеркают', 5),
  masculinePast: Word('исковеркал', 5),
  femininePast: Word('исковеркала', 5),
  neuterPast: Word('исковеркало', 5),
  pluralPast: Word('исковеркали', 5),
  imperativeInformal: Word('исковеркай', 5),
  imperativeFormal: Word('исковеркайте', 5),
  imperfect: [],
};

perfectVerbs.set(исковеркать.name.text, исковеркать);

export { исковеркать };