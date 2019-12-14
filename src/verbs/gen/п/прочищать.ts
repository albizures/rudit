import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочищать: PerfectVerb = {
  name: Word('прочищать', 6),
  singular1stPerson: Word('прочищаю', 6),
  singular2ndPerson: Word('прочищаешь', 6),
  singular3rdPerson: Word('прочищает', 6),
  plural1stPerson: Word('прочищаем', 6),
  plural2ndPerson: Word('прочищаете', 6),
  plural3rdPerson: Word('прочищают', 6),
  masculinePast: Word('прочищал', 6),
  femininePast: Word('прочищала', 6),
  neuterPast: Word('прочищало', 6),
  pluralPast: Word('прочищали', 6),
  imperativeInformal: Word('прочищай', 6),
  imperativeFormal: Word('прочищайте', 6),
  imperfect: [],
};

perfectVerbs.set(прочищать.name.text, прочищать);

export { прочищать };