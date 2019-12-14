import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загреметь: PerfectVerb = {
  name: Word('загреметь', 6),
  singular1stPerson: Word('загремлю', 7),
  singular2ndPerson: Word('загремишь', 6),
  singular3rdPerson: Word('загремит', 6),
  plural1stPerson: Word('загремим', 6),
  plural2ndPerson: Word('загремите', 6),
  plural3rdPerson: Word('загремят', 6),
  masculinePast: Word('загремел', 6),
  femininePast: Word('загремела', 6),
  neuterPast: Word('загремело', 6),
  pluralPast: Word('загремели', 6),
  imperativeInformal: Word('загреми', 6),
  imperativeFormal: Word('загремите', 6),
  imperfect: ['греметь'],
};

perfectVerbs.set(загреметь.name.text, загреметь);

export { загреметь };