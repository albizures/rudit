import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const голубеть: PerfectVerb = {
  name: Word('голубеть', 5),
  singular1stPerson: Word('голубею', 5),
  singular2ndPerson: Word('голубеешь', 5),
  singular3rdPerson: Word('голубеет', 5),
  plural1stPerson: Word('голубеем', 5),
  plural2ndPerson: Word('голубеете', 5),
  plural3rdPerson: Word('голубеют', 5),
  masculinePast: Word('голубел', 5),
  femininePast: Word('голубела', 5),
  neuterPast: Word('голубело', 5),
  pluralPast: Word('голубели', 5),
  imperativeInformal: Word('голубей', 5),
  imperativeFormal: Word('голубейте', 5),
  imperfect: [],
};

perfectVerbs.set(голубеть.name.text, голубеть);

export { голубеть };