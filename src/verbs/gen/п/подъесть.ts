import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подъесть: PerfectVerb = {
  name: Word('подъесть', 4),
  singular1stPerson: Word('подъем', 4),
  singular2ndPerson: Word('подъешь', 4),
  singular3rdPerson: Word('подъест', 4),
  plural1stPerson: Word('подъедим', 6),
  plural2ndPerson: Word('подъедите', 6),
  plural3rdPerson: Word('подъедят', 6),
  masculinePast: Word('подъел', 4),
  femininePast: Word('подъела', 4),
  neuterPast: Word('подъело', 4),
  pluralPast: Word('подъели', 4),
  imperativeInformal: Word('подъешь', 4),
  imperativeFormal: Word('подъешьте', 4),
  imperfect: [],
};

perfectVerbs.set(подъесть.name.text, подъесть);

export { подъесть };