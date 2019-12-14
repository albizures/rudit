import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исторгнуть: PerfectVerb = {
  name: Word('исторгнуть', 3),
  singular1stPerson: Word('исторгну', 3),
  singular2ndPerson: Word('исторгнешь', 3),
  singular3rdPerson: Word('исторгнет', 3),
  plural1stPerson: Word('исторгнем', 3),
  plural2ndPerson: Word('исторгнете', 3),
  plural3rdPerson: Word('исторгнут', 3),
  masculinePast: Word('исторг//исто'ргнул', 3),
  femininePast: Word('исторгла', 3),
  neuterPast: Word('исторгло', 3),
  pluralPast: Word('исторгли', 3),
  imperativeInformal: Word('исторгни', 3),
  imperativeFormal: Word('исторгните', 3),
  imperfect: [],
};

perfectVerbs.set(исторгнуть.name.text, исторгнуть);

export { исторгнуть };