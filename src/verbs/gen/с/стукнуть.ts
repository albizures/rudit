import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стукнуть: PerfectVerb = {
  name: Word('стукнуть', 2),
  singular1stPerson: Word('стукну', 2),
  singular2ndPerson: Word('стукнешь', 2),
  singular3rdPerson: Word('стукнет', 2),
  plural1stPerson: Word('стукнем', 2),
  plural2ndPerson: Word('стукнете', 2),
  plural3rdPerson: Word('стукнут', 2),
  masculinePast: Word('стукнул', 2),
  femininePast: Word('стукнула', 2),
  neuterPast: Word('стукнуло', 2),
  pluralPast: Word('стукнули', 2),
  imperativeInformal: Word('стукни', 2),
  imperativeFormal: Word('стукните', 2),
  imperfect: ['стучать','стукать'],
};

perfectVerbs.set(стукнуть.name.text, стукнуть);

export { стукнуть };