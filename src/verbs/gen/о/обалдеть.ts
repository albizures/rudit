import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обалдеть: PerfectVerb = {
  name: Word('обалдеть', 5),
  singular1stPerson: Word('обалдею', 5),
  singular2ndPerson: Word('обалдеешь', 5),
  singular3rdPerson: Word('обалдеет', 5),
  plural1stPerson: Word('обалдеем', 5),
  plural2ndPerson: Word('обалдеете', 5),
  plural3rdPerson: Word('обалдеют', 5),
  masculinePast: Word('обалдел', 5),
  femininePast: Word('обалдела', 5),
  neuterPast: Word('обалдело', 5),
  pluralPast: Word('обалдели', 5),
  imperativeInformal: Word('обалдей', 5),
  imperativeFormal: Word('обалдейте', 5),
  imperfect: [],
};

perfectVerbs.set(обалдеть.name.text, обалдеть);

export { обалдеть };