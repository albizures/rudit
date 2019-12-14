import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блёкнуть: PerfectVerb = {
  name: Word('блёкнуть', 5),
  singular1stPerson: Word('блёкну', 5),
  singular2ndPerson: Word('блёкнешь', 5),
  singular3rdPerson: Word('блёкнет', 5),
  plural1stPerson: Word('блёкнем', 5),
  plural2ndPerson: Word('блёкнете', 5),
  plural3rdPerson: Word('блёкнут', 5),
  masculinePast: Word('блёк//блёкнул', 11),
  femininePast: Word('блёкла', 5),
  neuterPast: Word('блёкло', 5),
  pluralPast: Word('блёкли', 5),
  imperativeInformal: Word('блёкни', 5),
  imperativeFormal: Word('блёкните', 7),
  imperfect: [],
};

perfectVerbs.set(блёкнуть.name.text, блёкнуть);

export { блёкнуть };