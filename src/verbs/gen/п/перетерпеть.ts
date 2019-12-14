import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетерпеть: PerfectVerb = {
  name: Word('перетерпеть', 8),
  singular1stPerson: Word('перетерплю', 9),
  singular2ndPerson: Word('перетерпишь', 5),
  singular3rdPerson: Word('перетерпит', 5),
  plural1stPerson: Word('перетерпим', 5),
  plural2ndPerson: Word('перетерпите', 5),
  plural3rdPerson: Word('перетерпят', 5),
  masculinePast: Word('перетерпел', 8),
  femininePast: Word('перетерпела', 8),
  neuterPast: Word('перетерпело', 8),
  pluralPast: Word('перетерпели', 8),
  imperativeInformal: Word('перетерпи', 8),
  imperativeFormal: Word('перетерпите', 8),
  imperfect: [],
};

perfectVerbs.set(перетерпеть.name.text, перетерпеть);

export { перетерпеть };