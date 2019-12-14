import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрубеть: PerfectVerb = {
  name: Word('загрубеть', 6),
  singular1stPerson: Word('загрубею', 6),
  singular2ndPerson: Word('загрубеешь', 6),
  singular3rdPerson: Word('загрубеет', 6),
  plural1stPerson: Word('загрубеем', 6),
  plural2ndPerson: Word('загрубеете', 6),
  plural3rdPerson: Word('загрубеют', 6),
  masculinePast: Word('загрубел', 6),
  femininePast: Word('загрубела', 6),
  neuterPast: Word('загрубело', 6),
  pluralPast: Word('загрубели', 6),
  imperativeInformal: Word('загрубей', 6),
  imperativeFormal: Word('загрубейте', 6),
  imperfect: [],
};

perfectVerbs.set(загрубеть.name.text, загрубеть);

export { загрубеть };