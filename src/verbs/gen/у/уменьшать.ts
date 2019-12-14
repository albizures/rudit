import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уменьшать: PerfectVerb = {
  name: Word('уменьшать', 6),
  singular1stPerson: Word('уменьшаю', 6),
  singular2ndPerson: Word('уменьшаешь', 6),
  singular3rdPerson: Word('уменьшает', 6),
  plural1stPerson: Word('уменьшаем', 6),
  plural2ndPerson: Word('уменьшаете', 6),
  plural3rdPerson: Word('уменьшают', 6),
  masculinePast: Word('уменьшал', 6),
  femininePast: Word('уменьшала', 6),
  neuterPast: Word('уменьшало', 6),
  pluralPast: Word('уменьшали', 6),
  imperativeInformal: Word('уменьшай', 6),
  imperativeFormal: Word('уменьшайте', 6),
  imperfect: ['уменьшить'],
};

perfectVerbs.set(уменьшать.name.text, уменьшать);

export { уменьшать };