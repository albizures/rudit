import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охрометь: PerfectVerb = {
  name: Word('охрометь', 5),
  singular1stPerson: Word('охромею', 5),
  singular2ndPerson: Word('охромеешь', 5),
  singular3rdPerson: Word('охромеет', 5),
  plural1stPerson: Word('охромеем', 5),
  plural2ndPerson: Word('охромеете', 5),
  plural3rdPerson: Word('охромеют', 5),
  masculinePast: Word('охромел', 5),
  femininePast: Word('охромела', 5),
  neuterPast: Word('охромело', 5),
  pluralPast: Word('охромели', 5),
  imperativeInformal: Word('охромей', 5),
  imperativeFormal: Word('охромейте', 5),
  imperfect: [],
};

perfectVerbs.set(охрометь.name.text, охрометь);

export { охрометь };