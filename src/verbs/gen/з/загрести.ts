import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрести: PerfectVerb = {
  name: Word('загрести', 7),
  singular1stPerson: Word('загребу', 6),
  singular2ndPerson: Word('загребёшь', 1),
  singular3rdPerson: Word('загребёт', 1),
  plural1stPerson: Word('загребём', 1),
  plural2ndPerson: Word('загребёте', 1),
  plural3rdPerson: Word('загребут', 6),
  masculinePast: Word('загрёб', 1),
  femininePast: Word('загребла', 7),
  neuterPast: Word('загребло', 7),
  pluralPast: Word('загребли', 7),
  imperativeInformal: Word('загреби', 6),
  imperativeFormal: Word('загребите', 6),
  imperfect: [],
};

perfectVerbs.set(загрести.name.text, загрести);

export { загрести };