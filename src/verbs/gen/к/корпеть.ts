import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const корпеть: PerfectVerb = {
  name: Word('корпеть', 4),
  singular1stPerson: Word('корплю', 5),
  singular2ndPerson: Word('корпишь', 4),
  singular3rdPerson: Word('корпит', 4),
  plural1stPerson: Word('корпим', 4),
  plural2ndPerson: Word('корпите', 4),
  plural3rdPerson: Word('корпят', 4),
  masculinePast: Word('корпел', 4),
  femininePast: Word('корпела', 4),
  neuterPast: Word('корпело', 4),
  pluralPast: Word('корпели', 4),
  imperativeInformal: Word('корпи', 4),
  imperativeFormal: Word('корпите', 4),
  imperfect: [],
};

perfectVerbs.set(корпеть.name.text, корпеть);

export { корпеть };