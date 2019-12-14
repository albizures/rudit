import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заглушать: PerfectVerb = {
  name: Word('заглушать', 6),
  singular1stPerson: Word('заглушаю', 6),
  singular2ndPerson: Word('заглушаешь', 6),
  singular3rdPerson: Word('заглушает', 6),
  plural1stPerson: Word('заглушаем', 6),
  plural2ndPerson: Word('заглушаете', 6),
  plural3rdPerson: Word('заглушают', 6),
  masculinePast: Word('заглушал', 6),
  femininePast: Word('заглушала', 6),
  neuterPast: Word('заглушало', 6),
  pluralPast: Word('заглушали', 6),
  imperativeInformal: Word('заглушай', 6),
  imperativeFormal: Word('заглушайте', 6),
  imperfect: [],
};

perfectVerbs.set(заглушать.name.text, заглушать);

export { заглушать };