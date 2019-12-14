import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const никнуть: PerfectVerb = {
  name: Word('никнуть', 1),
  singular1stPerson: Word('никну', 1),
  singular2ndPerson: Word('никнешь', 1),
  singular3rdPerson: Word('никнет', 1),
  plural1stPerson: Word('никнем', 1),
  plural2ndPerson: Word('никнете', 1),
  plural3rdPerson: Word('никнут', 1),
  masculinePast: Word('ник//ни'кнул', 1),
  femininePast: Word('никла', 1),
  neuterPast: Word('никло', 1),
  pluralPast: Word('никли', 1),
  imperativeInformal: Word('никни', 1),
  imperativeFormal: Word('никните', 1),
  imperfect: [],
};

perfectVerbs.set(никнуть.name.text, никнуть);

export { никнуть };