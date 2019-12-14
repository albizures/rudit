import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сличать: PerfectVerb = {
  name: Word('сличать', 4),
  singular1stPerson: Word('сличаю', 4),
  singular2ndPerson: Word('сличаешь', 4),
  singular3rdPerson: Word('сличает', 4),
  plural1stPerson: Word('сличаем', 4),
  plural2ndPerson: Word('сличаете', 4),
  plural3rdPerson: Word('сличают', 4),
  masculinePast: Word('сличал', 4),
  femininePast: Word('сличала', 4),
  neuterPast: Word('сличало', 4),
  pluralPast: Word('сличали', 4),
  imperativeInformal: Word('сличай', 4),
  imperativeFormal: Word('сличайте', 4),
  imperfect: [],
};

perfectVerbs.set(сличать.name.text, сличать);

export { сличать };