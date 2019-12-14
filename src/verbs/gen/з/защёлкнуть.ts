import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защёлкнуть: PerfectVerb = {
  name: Word('защёлкнуть', 3),
  singular1stPerson: Word('защёлкну', 3),
  singular2ndPerson: Word('защёлкнешь', 3),
  singular3rdPerson: Word('защёлкнет', 3),
  plural1stPerson: Word('защёлкнем', 3),
  plural2ndPerson: Word('защёлкнете', 3),
  plural3rdPerson: Word('защёлкнут', 3),
  masculinePast: Word('защёлкнул', 3),
  femininePast: Word('защёлкнула', 3),
  neuterPast: Word('защёлкнуло', 3),
  pluralPast: Word('защёлкнули', 3),
  imperativeInformal: Word('защёлкни', 3),
  imperativeFormal: Word('защёлкните', 3),
  imperfect: [],
};

perfectVerbs.set(защёлкнуть.name.text, защёлкнуть);

export { защёлкнуть };