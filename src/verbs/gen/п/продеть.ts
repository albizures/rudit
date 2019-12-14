import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продеть: PerfectVerb = {
  name: Word('продеть', 4),
  singular1stPerson: Word('продену', 4),
  singular2ndPerson: Word('проденешь', 4),
  singular3rdPerson: Word('проденет', 4),
  plural1stPerson: Word('проденем', 4),
  plural2ndPerson: Word('проденете', 4),
  plural3rdPerson: Word('проденут', 4),
  masculinePast: Word('продел', 4),
  femininePast: Word('продела', 4),
  neuterPast: Word('продело', 4),
  pluralPast: Word('продели', 4),
  imperativeInformal: Word('продень', 4),
  imperativeFormal: Word('проденьте', 4),
  imperfect: [],
};

perfectVerbs.set(продеть.name.text, продеть);

export { продеть };