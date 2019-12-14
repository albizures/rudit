import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крутануть: PerfectVerb = {
  name: Word('крутануть', 6),
  singular1stPerson: Word('крутану', 6),
  singular2ndPerson: Word('крутанёшь', 4),
  singular3rdPerson: Word('крутанёт', 4),
  plural1stPerson: Word('крутанём', 4),
  plural2ndPerson: Word('крутанёте', 4),
  plural3rdPerson: Word('крутанут', 6),
  masculinePast: Word('крутанул', 6),
  femininePast: Word('крутанула', 6),
  neuterPast: Word('крутануло', 6),
  pluralPast: Word('крутанули', 6),
  imperativeInformal: Word('крутани', 6),
  imperativeFormal: Word('крутаните', 6),
  imperfect: [],
};

perfectVerbs.set(крутануть.name.text, крутануть);

export { крутануть };