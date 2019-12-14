import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утерпеть: PerfectVerb = {
  name: Word('утерпеть', 5),
  singular1stPerson: Word('утерплю', 6),
  singular2ndPerson: Word('утерпишь', 2),
  singular3rdPerson: Word('утерпит', 2),
  plural1stPerson: Word('утерпим', 2),
  plural2ndPerson: Word('утерпите', 2),
  plural3rdPerson: Word('утерпят', 2),
  masculinePast: Word('утерпел', 5),
  femininePast: Word('утерпела', 5),
  neuterPast: Word('утерпело', 5),
  pluralPast: Word('утерпели', 5),
  imperativeInformal: Word('утерпи', 5),
  imperativeFormal: Word('утерпите', 5),
  imperfect: [],
};

perfectVerbs.set(утерпеть.name.text, утерпеть);

export { утерпеть };