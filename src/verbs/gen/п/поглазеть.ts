import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглазеть: PerfectVerb = {
  name: Word('поглазеть', 6),
  singular1stPerson: Word('поглазею', 6),
  singular2ndPerson: Word('поглазеешь', 6),
  singular3rdPerson: Word('поглазеет', 6),
  plural1stPerson: Word('поглазеем', 6),
  plural2ndPerson: Word('поглазеете', 6),
  plural3rdPerson: Word('поглазеют', 6),
  masculinePast: Word('поглазел', 6),
  femininePast: Word('поглазела', 6),
  neuterPast: Word('поглазело', 6),
  pluralPast: Word('поглазели', 6),
  imperativeInformal: Word('поглазей', 6),
  imperativeFormal: Word('поглазейте', 6),
  imperfect: [],
};

perfectVerbs.set(поглазеть.name.text, поглазеть);

export { поглазеть };