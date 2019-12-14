import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протянуть: PerfectVerb = {
  name: Word('протянуть', 6),
  singular1stPerson: Word('протяну', 6),
  singular2ndPerson: Word('протянешь', 4),
  singular3rdPerson: Word('протянет', 4),
  plural1stPerson: Word('протянем', 4),
  plural2ndPerson: Word('протянете', 4),
  plural3rdPerson: Word('протянут', 4),
  masculinePast: Word('протянул', 6),
  femininePast: Word('протянула', 6),
  neuterPast: Word('протянуло', 6),
  pluralPast: Word('протянули', 6),
  imperativeInformal: Word('протяни', 6),
  imperativeFormal: Word('протяните', 6),
  imperfect: ['протягивать'],
};

perfectVerbs.set(протянуть.name.text, протянуть);

export { протянуть };