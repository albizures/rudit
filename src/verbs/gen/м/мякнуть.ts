import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мякнуть: PerfectVerb = {
  name: Word('мякнуть', 1),
  singular1stPerson: Word('мякну', 1),
  singular2ndPerson: Word('мякнешь', 1),
  singular3rdPerson: Word('мякнет', 1),
  plural1stPerson: Word('мякнем', 1),
  plural2ndPerson: Word('мякнете', 1),
  plural3rdPerson: Word('мякнут', 1),
  masculinePast: Word('мяк//мя'кнул', 1),
  femininePast: Word('мякла', 1),
  neuterPast: Word('мякло', 1),
  pluralPast: Word('мякли', 1),
  imperativeInformal: Word('мякни', 1),
  imperativeFormal: Word('мякните', 1),
  imperfect: [],
};

perfectVerbs.set(мякнуть.name.text, мякнуть);

export { мякнуть };