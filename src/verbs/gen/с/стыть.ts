import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стыть: PerfectVerb = {
  name: Word('стыть', 2),
  singular1stPerson: Word('стыну', 2),
  singular2ndPerson: Word('стынешь', 2),
  singular3rdPerson: Word('стынет', 2),
  plural1stPerson: Word('стынем', 2),
  plural2ndPerson: Word('стынете', 2),
  plural3rdPerson: Word('стынут', 2),
  masculinePast: Word('стыл', 2),
  femininePast: Word('стыла', 2),
  neuterPast: Word('стыло', 2),
  pluralPast: Word('стыли', 2),
  imperativeInformal: Word('стынь', 2),
  imperativeFormal: Word('стыньте', 2),
  imperfect: ['остыть'],
};

perfectVerbs.set(стыть.name.text, стыть);

export { стыть };