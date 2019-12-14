import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заезжать: PerfectVerb = {
  name: Word('заезжать', 5),
  singular1stPerson: Word('заезжаю', 5),
  singular2ndPerson: Word('заезжаешь', 5),
  singular3rdPerson: Word('заезжает', 5),
  plural1stPerson: Word('заезжаем', 5),
  plural2ndPerson: Word('заезжаете', 5),
  plural3rdPerson: Word('заезжают', 5),
  masculinePast: Word('заезжал', 5),
  femininePast: Word('заезжала', 5),
  neuterPast: Word('заезжало', 5),
  pluralPast: Word('заезжали', 5),
  imperativeInformal: Word('заезжай', 5),
  imperativeFormal: Word('заезжайте', 5),
  imperfect: [],
};

perfectVerbs.set(заезжать.name.text, заезжать);

export { заезжать };