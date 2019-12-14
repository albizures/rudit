import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стихнуть: PerfectVerb = {
  name: Word('стихнуть', 2),
  singular1stPerson: Word('стихну', 2),
  singular2ndPerson: Word('стихнешь', 2),
  singular3rdPerson: Word('стихнет', 2),
  plural1stPerson: Word('стихнем', 2),
  plural2ndPerson: Word('стихнете', 2),
  plural3rdPerson: Word('стихнут', 2),
  masculinePast: Word('стих', 2),
  femininePast: Word('стихла', 2),
  neuterPast: Word('стихло', 2),
  pluralPast: Word('стихли', 2),
  imperativeInformal: Word('стихни', 2),
  imperativeFormal: Word('стихните', 2),
  imperfect: [],
};

perfectVerbs.set(стихнуть.name.text, стихнуть);

export { стихнуть };