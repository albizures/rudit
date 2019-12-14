import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слизнуть: PerfectVerb = {
  name: Word('слизнуть', 2),
  singular1stPerson: Word('слизну', 2),
  singular2ndPerson: Word('слизнешь', 2),
  singular3rdPerson: Word('слизнет', 2),
  plural1stPerson: Word('слизнем', 2),
  plural2ndPerson: Word('слизнете', 2),
  plural3rdPerson: Word('слизнут', 2),
  masculinePast: Word('слизнул', 2),
  femininePast: Word('слизла', 2),
  neuterPast: Word('слизло', 2),
  pluralPast: Word('слизли', 2),
  imperativeInformal: Word('слизни', 2),
  imperativeFormal: Word('слизните', 2),
  imperfect: [],
};

perfectVerbs.set(слизнуть.name.text, слизнуть);

export { слизнуть };