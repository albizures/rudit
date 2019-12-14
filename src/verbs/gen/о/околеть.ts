import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const околеть: PerfectVerb = {
  name: Word('околеть', 4),
  singular1stPerson: Word('околею', 4),
  singular2ndPerson: Word('околеешь', 4),
  singular3rdPerson: Word('околеет', 4),
  plural1stPerson: Word('околеем', 4),
  plural2ndPerson: Word('околеете', 4),
  plural3rdPerson: Word('околеют', 4),
  masculinePast: Word('околел', 4),
  femininePast: Word('околела', 4),
  neuterPast: Word('околело', 4),
  pluralPast: Word('околели', 4),
  imperativeInformal: Word('околей', 4),
  imperativeFormal: Word('околейте', 4),
  imperfect: [],
};

perfectVerbs.set(околеть.name.text, околеть);

export { околеть };