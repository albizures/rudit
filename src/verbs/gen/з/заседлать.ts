import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заседлать: PerfectVerb = {
  name: Word('заседлать', 6),
  singular1stPerson: Word('заседлаю', 6),
  singular2ndPerson: Word('заседлаешь', 6),
  singular3rdPerson: Word('заседлает', 6),
  plural1stPerson: Word('заседлаем', 6),
  plural2ndPerson: Word('заседлаете', 6),
  plural3rdPerson: Word('заседлают', 6),
  masculinePast: Word('заседлал', 6),
  femininePast: Word('заседлала', 6),
  neuterPast: Word('заседлало', 6),
  pluralPast: Word('заседлали', 6),
  imperativeInformal: Word('заседлай', 6),
  imperativeFormal: Word('заседлайте', 6),
  imperfect: [],
};

perfectVerbs.set(заседлать.name.text, заседлать);

export { заседлать };