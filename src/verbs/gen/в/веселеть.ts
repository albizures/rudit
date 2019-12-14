import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const веселеть: PerfectVerb = {
  name: Word('веселеть', 5),
  singular1stPerson: Word('веселею', 5),
  singular2ndPerson: Word('веселеешь', 5),
  singular3rdPerson: Word('веселеет', 5),
  plural1stPerson: Word('веселеем', 5),
  plural2ndPerson: Word('веселеете', 5),
  plural3rdPerson: Word('веселеют', 5),
  masculinePast: Word('веселел', 5),
  femininePast: Word('веселела', 5),
  neuterPast: Word('веселело', 5),
  pluralPast: Word('веселели', 5),
  imperativeInformal: Word('веселей', 5),
  imperativeFormal: Word('веселейте', 5),
  imperfect: [],
};

perfectVerbs.set(веселеть.name.text, веселеть);

export { веселеть };