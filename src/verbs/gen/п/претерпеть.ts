import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const претерпеть: PerfectVerb = {
  name: Word('претерпеть', 7),
  singular1stPerson: Word('претерплю', 8),
  singular2ndPerson: Word('претерпишь', 4),
  singular3rdPerson: Word('претерпит', 4),
  plural1stPerson: Word('претерпим', 4),
  plural2ndPerson: Word('претерпите', 4),
  plural3rdPerson: Word('претерпят', 4),
  masculinePast: Word('претерпел', 7),
  femininePast: Word('претерпела', 7),
  neuterPast: Word('претерпело', 7),
  pluralPast: Word('претерпели', 7),
  imperativeInformal: Word('претерпи', 7),
  imperativeFormal: Word('претерпите', 7),
  imperfect: [],
};

perfectVerbs.set(претерпеть.name.text, претерпеть);

export { претерпеть };