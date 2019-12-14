import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддеть: PerfectVerb = {
  name: Word('поддеть', 4),
  singular1stPerson: Word('поддену', 4),
  singular2ndPerson: Word('подденешь', 4),
  singular3rdPerson: Word('подденет', 4),
  plural1stPerson: Word('подденем', 4),
  plural2ndPerson: Word('подденете', 4),
  plural3rdPerson: Word('подденут', 4),
  masculinePast: Word('поддел', 4),
  femininePast: Word('поддела', 4),
  neuterPast: Word('поддело', 4),
  pluralPast: Word('поддели', 4),
  imperativeInformal: Word('поддень', 4),
  imperativeFormal: Word('подденьте', 4),
  imperfect: [],
};

perfectVerbs.set(поддеть.name.text, поддеть);

export { поддеть };