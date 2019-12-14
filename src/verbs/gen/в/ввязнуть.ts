import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввязнуть: PerfectVerb = {
  name: Word('ввязнуть', 2),
  singular1stPerson: Word('ввязну', 2),
  singular2ndPerson: Word('ввязнешь', 2),
  singular3rdPerson: Word('ввязнет', 2),
  plural1stPerson: Word('ввязнем', 2),
  plural2ndPerson: Word('ввязнете', 2),
  plural3rdPerson: Word('ввязнут', 2),
  masculinePast: Word('ввяз', 2),
  femininePast: Word('ввязла', 2),
  neuterPast: Word('ввязло', 2),
  pluralPast: Word('ввязли', 2),
  imperativeInformal: Word('ввязни', 2),
  imperativeFormal: Word('ввязните', 2),
  imperfect: [],
};

perfectVerbs.set(ввязнуть.name.text, ввязнуть);

export { ввязнуть };