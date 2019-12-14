import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбухнуть: PerfectVerb = {
  name: Word('разбухнуть', 4),
  singular1stPerson: Word('разбухну', 4),
  singular2ndPerson: Word('разбухнешь', 4),
  singular3rdPerson: Word('разбухнет', 4),
  plural1stPerson: Word('разбухнем', 4),
  plural2ndPerson: Word('разбухнете', 4),
  plural3rdPerson: Word('разбухнут', 4),
  masculinePast: Word('разбух', 4),
  femininePast: Word('разбухла', 4),
  neuterPast: Word('разбухло', 4),
  pluralPast: Word('разбухли', 4),
  imperativeInformal: Word('разбухни', 4),
  imperativeFormal: Word('разбухните', 4),
  imperfect: [],
};

perfectVerbs.set(разбухнуть.name.text, разбухнуть);

export { разбухнуть };