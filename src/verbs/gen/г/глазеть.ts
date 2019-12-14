import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глазеть: PerfectVerb = {
  name: Word('глазеть', 4),
  singular1stPerson: Word('глазею', 4),
  singular2ndPerson: Word('глазеешь', 4),
  singular3rdPerson: Word('глазеет', 4),
  plural1stPerson: Word('глазеем', 4),
  plural2ndPerson: Word('глазеете', 4),
  plural3rdPerson: Word('глазеют', 4),
  masculinePast: Word('глазел', 4),
  femininePast: Word('глазела', 4),
  neuterPast: Word('глазело', 4),
  pluralPast: Word('глазели', 4),
  imperativeInformal: Word('глазей', 4),
  imperativeFormal: Word('глазейте', 4),
  imperfect: ['поглазеть'],
};

perfectVerbs.set(глазеть.name.text, глазеть);

export { глазеть };