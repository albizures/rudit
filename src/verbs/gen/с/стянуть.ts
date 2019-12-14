import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стянуть: PerfectVerb = {
  name: Word('стянуть', 4),
  singular1stPerson: Word('стяну', 4),
  singular2ndPerson: Word('стянешь', 2),
  singular3rdPerson: Word('стянет', 2),
  plural1stPerson: Word('стянем', 2),
  plural2ndPerson: Word('стянете', 2),
  plural3rdPerson: Word('стянут', 2),
  masculinePast: Word('стянул', 4),
  femininePast: Word('стянула', 4),
  neuterPast: Word('стянуло', 4),
  pluralPast: Word('стянули', 4),
  imperativeInformal: Word('стяни', 4),
  imperativeFormal: Word('стяните', 4),
  imperfect: [],
};

perfectVerbs.set(стянуть.name.text, стянуть);

export { стянуть };