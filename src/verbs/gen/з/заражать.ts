import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заражать: PerfectVerb = {
  name: Word('заражать', 5),
  singular1stPerson: Word('заражаю', 5),
  singular2ndPerson: Word('заражаешь', 5),
  singular3rdPerson: Word('заражает', 5),
  plural1stPerson: Word('заражаем', 5),
  plural2ndPerson: Word('заражаете', 5),
  plural3rdPerson: Word('заражают', 5),
  masculinePast: Word('заражал', 5),
  femininePast: Word('заражала', 5),
  neuterPast: Word('заражало', 5),
  pluralPast: Word('заражали', 5),
  imperativeInformal: Word('заражай', 5),
  imperativeFormal: Word('заражайте', 5),
  imperfect: [],
};

perfectVerbs.set(заражать.name.text, заражать);

export { заражать };