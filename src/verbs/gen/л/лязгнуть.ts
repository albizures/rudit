import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лязгнуть: PerfectVerb = {
  name: Word('лязгнуть', 1),
  singular1stPerson: Word('лязгну', 1),
  singular2ndPerson: Word('лязгнешь', 1),
  singular3rdPerson: Word('лязгнет', 1),
  plural1stPerson: Word('лязгнем', 1),
  plural2ndPerson: Word('лязгнете', 1),
  plural3rdPerson: Word('лязгнут', 1),
  masculinePast: Word('лязгнул', 1),
  femininePast: Word('лязгнула', 1),
  neuterPast: Word('лязгнуло', 1),
  pluralPast: Word('лязгнули', 1),
  imperativeInformal: Word('лязгни', 1),
  imperativeFormal: Word('лязгните', 1),
  imperfect: [],
};

perfectVerbs.set(лязгнуть.name.text, лязгнуть);

export { лязгнуть };