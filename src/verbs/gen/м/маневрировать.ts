import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const маневрировать: PerfectVerb = {
  name: Word('маневрировать', 6),
  singular1stPerson: Word('маневрирую', 6),
  singular2ndPerson: Word('маневрируешь', 6),
  singular3rdPerson: Word('маневрирует', 6),
  plural1stPerson: Word('маневрируем', 6),
  plural2ndPerson: Word('маневрируете', 6),
  plural3rdPerson: Word('маневрируют', 6),
  masculinePast: Word('маневрировал', 6),
  femininePast: Word('маневрировала', 6),
  neuterPast: Word('маневрировало', 6),
  pluralPast: Word('маневрировали', 6),
  imperativeInformal: Word('маневрируй', 6),
  imperativeFormal: Word('маневрируйте', 6),
  imperfect: [],
};

perfectVerbs.set(маневрировать.name.text, маневрировать);

export { маневрировать };