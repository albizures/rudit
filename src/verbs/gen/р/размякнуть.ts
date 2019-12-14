import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размякнуть: PerfectVerb = {
  name: Word('размякнуть', 4),
  singular1stPerson: Word('размякну', 4),
  singular2ndPerson: Word('размякнешь', 4),
  singular3rdPerson: Word('размякнет', 4),
  plural1stPerson: Word('размякнем', 4),
  plural2ndPerson: Word('размякнете', 4),
  plural3rdPerson: Word('размякнут', 4),
  masculinePast: Word('размяк', 4),
  femininePast: Word('размякла', 4),
  neuterPast: Word('размякло', 4),
  pluralPast: Word('размякли', 4),
  imperativeInformal: Word('размякни', 4),
  imperativeFormal: Word('размякните', 4),
  imperfect: [],
};

perfectVerbs.set(размякнуть.name.text, размякнуть);

export { размякнуть };