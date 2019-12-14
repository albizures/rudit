import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грянуть: PerfectVerb = {
  name: Word('грянуть', 2),
  singular1stPerson: Word('гряну', 2),
  singular2ndPerson: Word('грянешь', 2),
  singular3rdPerson: Word('грянет', 2),
  plural1stPerson: Word('грянем', 2),
  plural2ndPerson: Word('грянете', 2),
  plural3rdPerson: Word('грянут', 2),
  masculinePast: Word('грянул', 2),
  femininePast: Word('грянула', 2),
  neuterPast: Word('грянуло', 2),
  pluralPast: Word('грянули', 2),
  imperativeInformal: Word('грянь', 2),
  imperativeFormal: Word('гряньте', 2),
  imperfect: [],
};

perfectVerbs.set(грянуть.name.text, грянуть);

export { грянуть };