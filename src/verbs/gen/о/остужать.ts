import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остужать: PerfectVerb = {
  name: Word('остужать', 5),
  singular1stPerson: Word('остужаю', 5),
  singular2ndPerson: Word('остужаешь', 5),
  singular3rdPerson: Word('остужает', 5),
  plural1stPerson: Word('остужаем', 5),
  plural2ndPerson: Word('остужаете', 5),
  plural3rdPerson: Word('остужают', 5),
  masculinePast: Word('остужал', 5),
  femininePast: Word('остужала', 5),
  neuterPast: Word('остужало', 5),
  pluralPast: Word('остужали', 5),
  imperativeInformal: Word('остужай', 5),
  imperativeFormal: Word('остужайте', 5),
  imperfect: [],
};

perfectVerbs.set(остужать.name.text, остужать);

export { остужать };