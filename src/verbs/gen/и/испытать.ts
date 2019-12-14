import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испытать: PerfectVerb = {
  name: Word('испытать', 5),
  singular1stPerson: Word('испытаю', 5),
  singular2ndPerson: Word('испытаешь', 5),
  singular3rdPerson: Word('испытает', 5),
  plural1stPerson: Word('испытаем', 5),
  plural2ndPerson: Word('испытаете', 5),
  plural3rdPerson: Word('испытают', 5),
  masculinePast: Word('испытал', 5),
  femininePast: Word('испытала', 5),
  neuterPast: Word('испытало', 5),
  pluralPast: Word('испытали', 5),
  imperativeInformal: Word('испытай', 5),
  imperativeFormal: Word('испытайте', 5),
  imperfect: ['испытывать'],
};

perfectVerbs.set(испытать.name.text, испытать);

export { испытать };