import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ожесточать: PerfectVerb = {
  name: Word('ожесточать', 7),
  singular1stPerson: Word('ожесточаю', 7),
  singular2ndPerson: Word('ожесточаешь', 7),
  singular3rdPerson: Word('ожесточает', 7),
  plural1stPerson: Word('ожесточаем', 7),
  plural2ndPerson: Word('ожесточаете', 7),
  plural3rdPerson: Word('ожесточают', 7),
  masculinePast: Word('ожесточал', 7),
  femininePast: Word('ожесточала', 7),
  neuterPast: Word('ожесточало', 7),
  pluralPast: Word('ожесточали', 7),
  imperativeInformal: Word('ожесточай', 7),
  imperativeFormal: Word('ожесточайте', 7),
  imperfect: [],
};

perfectVerbs.set(ожесточать.name.text, ожесточать);

export { ожесточать };