import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ослабнуть: PerfectVerb = {
  name: Word('ослабнуть', 3),
  singular1stPerson: Word('ослабну', 3),
  singular2ndPerson: Word('ослабнешь', 3),
  singular3rdPerson: Word('ослабнет', 3),
  plural1stPerson: Word('ослабнем', 3),
  plural2ndPerson: Word('ослабнете', 3),
  plural3rdPerson: Word('ослабнут', 3),
  masculinePast: Word('ослаб', 3),
  femininePast: Word('ослабла', 3),
  neuterPast: Word('ослабло', 3),
  pluralPast: Word('ослабли', 3),
  imperativeInformal: Word('ослабни', 3),
  imperativeFormal: Word('ослабните', 3),
  imperfect: [],
};

perfectVerbs.set(ослабнуть.name.text, ослабнуть);

export { ослабнуть };