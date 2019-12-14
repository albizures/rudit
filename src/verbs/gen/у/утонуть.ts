import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утонуть: PerfectVerb = {
  name: Word('утонуть', 4),
  singular1stPerson: Word('утону', 4),
  singular2ndPerson: Word('утонешь', 2),
  singular3rdPerson: Word('утонет', 2),
  plural1stPerson: Word('утонем', 2),
  plural2ndPerson: Word('утонете', 2),
  plural3rdPerson: Word('утонут', 2),
  masculinePast: Word('утонул', 4),
  femininePast: Word('утонула', 4),
  neuterPast: Word('утонуло', 4),
  pluralPast: Word('утонули', 4),
  imperativeInformal: Word('утони', 4),
  imperativeFormal: Word('утоните', 4),
  imperfect: [],
};

perfectVerbs.set(утонуть.name.text, утонуть);

export { утонуть };