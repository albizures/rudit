import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выесть: PerfectVerb = {
  name: Word('выесть', 1),
  singular1stPerson: Word('выем', 1),
  singular2ndPerson: Word('выешь', 1),
  singular3rdPerson: Word('выест', 1),
  plural1stPerson: Word('выедим', 1),
  plural2ndPerson: Word('выедите', 1),
  plural3rdPerson: Word('выедят', 1),
  masculinePast: Word('выел', 1),
  femininePast: Word('выела', 1),
  neuterPast: Word('выело', 1),
  pluralPast: Word('выели', 1),
  imperativeInformal: Word('выешь', 1),
  imperativeFormal: Word('выешьте', 1),
  imperfect: ['выедать'],
};

perfectVerbs.set(выесть.name.text, выесть);

export { выесть };