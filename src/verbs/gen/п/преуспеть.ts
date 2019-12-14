import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преуспеть: PerfectVerb = {
  name: Word('преуспеть', 6),
  singular1stPerson: Word('преуспею', 6),
  singular2ndPerson: Word('преуспеешь', 6),
  singular3rdPerson: Word('преуспеет', 6),
  plural1stPerson: Word('преуспеем', 6),
  plural2ndPerson: Word('преуспеете', 6),
  plural3rdPerson: Word('преуспеют', 6),
  masculinePast: Word('преуспел', 6),
  femininePast: Word('преуспела', 6),
  neuterPast: Word('преуспело', 6),
  pluralPast: Word('преуспели', 6),
  imperativeInformal: Word('преуспей', 6),
  imperativeFormal: Word('преуспейте', 6),
  imperfect: [],
};

perfectVerbs.set(преуспеть.name.text, преуспеть);

export { преуспеть };