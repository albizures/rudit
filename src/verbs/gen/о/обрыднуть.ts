import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрыднуть: PerfectVerb = {
  name: Word('обрыднуть', 3),
  singular1stPerson: Word('обрыдну', 3),
  singular2ndPerson: Word('обрыднешь', 3),
  singular3rdPerson: Word('обрыднет', 3),
  plural1stPerson: Word('обрыднем', 3),
  plural2ndPerson: Word('обрыднете', 3),
  plural3rdPerson: Word('обрыднут', 3),
  masculinePast: Word('обрыднул', 3),
  femininePast: Word('обрыдла', 3),
  neuterPast: Word('обрыдло', 3),
  pluralPast: Word('обрыдли', 3),
  imperativeInformal: Word('обрыдни', 3),
  imperativeFormal: Word('обрыдните', 3),
  imperfect: [],
};

perfectVerbs.set(обрыднуть.name.text, обрыднуть);

export { обрыднуть };