import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уличать: PerfectVerb = {
  name: Word('уличать', 4),
  singular1stPerson: Word('уличаю', 4),
  singular2ndPerson: Word('уличаешь', 4),
  singular3rdPerson: Word('уличает', 4),
  plural1stPerson: Word('уличаем', 4),
  plural2ndPerson: Word('уличаете', 4),
  plural3rdPerson: Word('уличают', 4),
  masculinePast: Word('уличал', 4),
  femininePast: Word('уличала', 4),
  neuterPast: Word('уличало', 4),
  pluralPast: Word('уличали', 4),
  imperativeInformal: Word('уличай', 4),
  imperativeFormal: Word('уличайте', 4),
  imperfect: [],
};

perfectVerbs.set(уличать.name.text, уличать);

export { уличать };