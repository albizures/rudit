import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щёлкнуть: PerfectVerb = {
  name: Word('щёлкнуть', 5),
  singular1stPerson: Word('щёлкну', 5),
  singular2ndPerson: Word('щёлкнешь', 5),
  singular3rdPerson: Word('щёлкнет', 5),
  plural1stPerson: Word('щёлкнем', 5),
  plural2ndPerson: Word('щёлкнете', 5),
  plural3rdPerson: Word('щёлкнут', 5),
  masculinePast: Word('щёлкнул', 5),
  femininePast: Word('щёлкнула', 7),
  neuterPast: Word('щёлкнуло', 7),
  pluralPast: Word('щёлкнули', 7),
  imperativeInformal: Word('щёлкни', 5),
  imperativeFormal: Word('щёлкните', 7),
  imperfect: [],
};

perfectVerbs.set(щёлкнуть.name.text, щёлкнуть);

export { щёлкнуть };