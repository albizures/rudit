import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрести: PerfectVerb = {
  name: Word('загрести', 7),
  singular1stPerson: Word('загребу', 6),
  singular2ndPerson: Word('загребёшь', 6),
  singular3rdPerson: Word('загребёт', 6),
  plural1stPerson: Word('загребём', 6),
  plural2ndPerson: Word('загребёте', 6),
  plural3rdPerson: Word('загребут', 6),
  masculinePast: Word('загрёб', 4),
  femininePast: Word('загребла', 7),
  neuterPast: Word('загребло', 7),
  pluralPast: Word('загребли', 7),
  imperativeInformal: Word('загреби', 6),
  imperativeFormal: Word('загребите', 6),
  imperfect: [],
};

perfectVerbs.set(загрести.name.text, загрести);

export { загрести };