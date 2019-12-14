import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защёлкнуть: PerfectVerb = {
  name: Word('защёлкнуть', 1),
  singular1stPerson: Word('защёлкну', 1),
  singular2ndPerson: Word('защёлкнешь', 1),
  singular3rdPerson: Word('защёлкнет', 1),
  plural1stPerson: Word('защёлкнем', 1),
  plural2ndPerson: Word('защёлкнете', 1),
  plural3rdPerson: Word('защёлкнут', 1),
  masculinePast: Word('защёлкнул', 1),
  femininePast: Word('защёлкнула', 1),
  neuterPast: Word('защёлкнуло', 1),
  pluralPast: Word('защёлкнули', 1),
  imperativeInformal: Word('защёлкни', 1),
  imperativeFormal: Word('защёлкните', 1),
  imperfect: [],
};

perfectVerbs.set(защёлкнуть.name.text, защёлкнуть);

export { защёлкнуть };