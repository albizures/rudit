import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ослабеть: PerfectVerb = {
  name: Word('ослабеть', 5),
  singular1stPerson: Word('ослабею', 5),
  singular2ndPerson: Word('ослабеешь', 5),
  singular3rdPerson: Word('ослабеет', 5),
  plural1stPerson: Word('ослабеем', 5),
  plural2ndPerson: Word('ослабеете', 5),
  plural3rdPerson: Word('ослабеют', 5),
  masculinePast: Word('ослабел', 5),
  femininePast: Word('ослабела', 5),
  neuterPast: Word('ослабело', 5),
  pluralPast: Word('ослабели', 5),
  imperativeInformal: Word('ослабей', 5),
  imperativeFormal: Word('ослабейте', 5),
  imperfect: [],
};

perfectVerbs.set(ослабеть.name.text, ослабеть);

export { ослабеть };