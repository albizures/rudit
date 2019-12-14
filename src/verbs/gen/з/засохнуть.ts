import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засохнуть: PerfectVerb = {
  name: Word('засохнуть', 3),
  singular1stPerson: Word('засохну', 3),
  singular2ndPerson: Word('засохнешь', 3),
  singular3rdPerson: Word('засохнет', 3),
  plural1stPerson: Word('засохнем', 3),
  plural2ndPerson: Word('засохнете', 3),
  plural3rdPerson: Word('засохнут', 3),
  masculinePast: Word('засох', 3),
  femininePast: Word('засохла', 3),
  neuterPast: Word('засохло', 3),
  pluralPast: Word('засохли', 3),
  imperativeInformal: Word('засохни', 3),
  imperativeFormal: Word('засохните', 3),
  imperfect: [],
};

perfectVerbs.set(засохнуть.name.text, засохнуть);

export { засохнуть };