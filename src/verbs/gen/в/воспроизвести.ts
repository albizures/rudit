import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспроизвести: PerfectVerb = {
  name: Word('воспроизвести', 12),
  singular1stPerson: Word('воспроизведу', 11),
  singular2ndPerson: Word('воспроизведёшь', 9),
  singular3rdPerson: Word('воспроизведёт', 9),
  plural1stPerson: Word('воспроизведём', 9),
  plural2ndPerson: Word('воспроизведёте', 9),
  plural3rdPerson: Word('воспроизведут', 11),
  masculinePast: Word('воспроизвёл', 6),
  femininePast: Word('воспроизвела', 11),
  neuterPast: Word('воспроизвело', 11),
  pluralPast: Word('воспроизвели', 11),
  imperativeInformal: Word('воспроизведи', 11),
  imperativeFormal: Word('воспроизведите', 11),
  imperfect: [],
};

perfectVerbs.set(воспроизвести.name.text, воспроизвести);

export { воспроизвести };