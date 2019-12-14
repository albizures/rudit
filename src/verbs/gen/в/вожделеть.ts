import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вожделеть: PerfectVerb = {
  name: Word('вожделеть', 6),
  singular1stPerson: Word('вожделею', 6),
  singular2ndPerson: Word('вожделеешь', 6),
  singular3rdPerson: Word('вожделеет', 6),
  plural1stPerson: Word('вожделеем', 6),
  plural2ndPerson: Word('вожделеете', 6),
  plural3rdPerson: Word('вожделеют', 6),
  masculinePast: Word('вожделел', 6),
  femininePast: Word('вожделела', 6),
  neuterPast: Word('вожделело', 6),
  pluralPast: Word('вожделели', 6),
  imperativeInformal: Word('вожделей', 6),
  imperativeFormal: Word('вожделейте', 6),
  imperfect: [],
};

perfectVerbs.set(вожделеть.name.text, вожделеть);

export { вожделеть };