import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лопать: PerfectVerb = {
  name: Word('лопать', 1),
  singular1stPerson: Word('лопаю', 1),
  singular2ndPerson: Word('лопаешь', 1),
  singular3rdPerson: Word('лопает', 1),
  plural1stPerson: Word('лопаем', 1),
  plural2ndPerson: Word('лопаете', 1),
  plural3rdPerson: Word('лопают', 1),
  masculinePast: Word('лопал', 1),
  femininePast: Word('лопала', 1),
  neuterPast: Word('лопало', 1),
  pluralPast: Word('лопали', 1),
  imperativeInformal: Word('лопай', 1),
  imperativeFormal: Word('лопайте', 1),
  imperfect: [],
};

perfectVerbs.set(лопать.name.text, лопать);

export { лопать };