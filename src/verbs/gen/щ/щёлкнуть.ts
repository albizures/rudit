import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щёлкнуть: PerfectVerb = {
  name: Word('щёлкнуть', 1),
  singular1stPerson: Word('щёлкну', 1),
  singular2ndPerson: Word('щёлкнешь', 1),
  singular3rdPerson: Word('щёлкнет', 1),
  plural1stPerson: Word('щёлкнем', 1),
  plural2ndPerson: Word('щёлкнете', 1),
  plural3rdPerson: Word('щёлкнут', 1),
  masculinePast: Word('щёлкнул', 1),
  femininePast: Word('щёлкнула', 1),
  neuterPast: Word('щёлкнуло', 1),
  pluralPast: Word('щёлкнули', 1),
  imperativeInformal: Word('щёлкни', 1),
  imperativeFormal: Word('щёлкните', 1),
  imperfect: [],
};

perfectVerbs.set(щёлкнуть.name.text, щёлкнуть);

export { щёлкнуть };