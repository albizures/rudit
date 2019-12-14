import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протерпеть: PerfectVerb = {
  name: Word('протерпеть', 7),
  singular1stPerson: Word('протерплю', 8),
  singular2ndPerson: Word('протерпишь', 4),
  singular3rdPerson: Word('протерпит', 4),
  plural1stPerson: Word('протерпим', 4),
  plural2ndPerson: Word('протерпите', 4),
  plural3rdPerson: Word('протерпят', 4),
  masculinePast: Word('протерпел', 7),
  femininePast: Word('протерпела', 7),
  neuterPast: Word('протерпело', 7),
  pluralPast: Word('протерпели', 7),
  imperativeInformal: Word('протерпи', 7),
  imperativeFormal: Word('протерпите', 7),
  imperfect: [],
};

perfectVerbs.set(протерпеть.name.text, протерпеть);

export { протерпеть };