import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расторгнуть: PerfectVerb = {
  name: Word('расторгнуть', 4),
  singular1stPerson: Word('расторгну', 4),
  singular2ndPerson: Word('расторгнешь', 4),
  singular3rdPerson: Word('расторгнет', 4),
  plural1stPerson: Word('расторгнем', 4),
  plural2ndPerson: Word('расторгнете', 4),
  plural3rdPerson: Word('расторгнут', 4),
  masculinePast: Word('расторг//расто'ргнул', 4),
  femininePast: Word('расторгла', 4),
  neuterPast: Word('расторгло', 4),
  pluralPast: Word('расторгли', 4),
  imperativeInformal: Word('расторгни', 4),
  imperativeFormal: Word('расторгните', 4),
  imperfect: [],
};

perfectVerbs.set(расторгнуть.name.text, расторгнуть);

export { расторгнуть };