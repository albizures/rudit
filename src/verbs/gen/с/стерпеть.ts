import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стерпеть: PerfectVerb = {
  name: Word('стерпеть', 5),
  singular1stPerson: Word('стерплю', 6),
  singular2ndPerson: Word('стерпишь', 2),
  singular3rdPerson: Word('стерпит', 2),
  plural1stPerson: Word('стерпим', 2),
  plural2ndPerson: Word('стерпите', 2),
  plural3rdPerson: Word('стерпят', 2),
  masculinePast: Word('стерпел', 5),
  femininePast: Word('стерпела', 5),
  neuterPast: Word('стерпело', 5),
  pluralPast: Word('стерпели', 5),
  imperativeInformal: Word('стерпи', 5),
  imperativeFormal: Word('стерпите', 5),
  imperfect: [],
};

perfectVerbs.set(стерпеть.name.text, стерпеть);

export { стерпеть };