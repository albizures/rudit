import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блёкнуть: PerfectVerb = {
  name: Word('блёкнуть', 2),
  singular1stPerson: Word('блёкну', 2),
  singular2ndPerson: Word('блёкнешь', 2),
  singular3rdPerson: Word('блёкнет', 2),
  plural1stPerson: Word('блёкнем', 2),
  plural2ndPerson: Word('блёкнете', 2),
  plural3rdPerson: Word('блёкнут', 2),
  masculinePast: Word('блёк//блёкнул', 2),
  femininePast: Word('блёкла', 2),
  neuterPast: Word('блёкло', 2),
  pluralPast: Word('блёкли', 2),
  imperativeInformal: Word('блёкни', 2),
  imperativeFormal: Word('блёкните', 2),
  imperfect: [],
};

perfectVerbs.set(блёкнуть.name.text, блёкнуть);

export { блёкнуть };