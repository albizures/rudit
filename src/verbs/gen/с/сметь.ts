import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сметь: PerfectVerb = {
  name: Word('сметь', 2),
  singular1stPerson: Word('смею', 2),
  singular2ndPerson: Word('смеешь', 2),
  singular3rdPerson: Word('смеет', 2),
  plural1stPerson: Word('смеем', 2),
  plural2ndPerson: Word('смеете', 2),
  plural3rdPerson: Word('смеют', 2),
  masculinePast: Word('смел', 2),
  femininePast: Word('смела', 2),
  neuterPast: Word('смело', 2),
  pluralPast: Word('смели', 2),
  imperativeInformal: Word('смей', 2),
  imperativeFormal: Word('смейте', 2),
  imperfect: ['посметь'],
};

perfectVerbs.set(сметь.name.text, сметь);

export { сметь };