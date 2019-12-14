import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскрывать: PerfectVerb = {
  name: Word('вскрывать', 6),
  singular1stPerson: Word('вскрываю', 6),
  singular2ndPerson: Word('вскрываешь', 6),
  singular3rdPerson: Word('вскрывает', 6),
  plural1stPerson: Word('вскрываем', 6),
  plural2ndPerson: Word('вскрываете', 6),
  plural3rdPerson: Word('вскрывают', 6),
  masculinePast: Word('вскрывал', 6),
  femininePast: Word('вскрывала', 6),
  neuterPast: Word('вскрывало', 6),
  pluralPast: Word('вскрывали', 6),
  imperativeInformal: Word('вскрывай', 6),
  imperativeFormal: Word('вскрывайте', 6),
  imperfect: ['вскрыть'],
};

perfectVerbs.set(вскрывать.name.text, вскрывать);

export { вскрывать };