import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрезветь: PerfectVerb = {
  name: Word('отрезветь', 6),
  singular1stPerson: Word('отрезвею', 6),
  singular2ndPerson: Word('отрезвеешь', 6),
  singular3rdPerson: Word('отрезвеет', 6),
  plural1stPerson: Word('отрезвеем', 6),
  plural2ndPerson: Word('отрезвеете', 6),
  plural3rdPerson: Word('отрезвеют', 6),
  masculinePast: Word('отрезвел', 6),
  femininePast: Word('отрезвела', 6),
  neuterPast: Word('отрезвело', 6),
  pluralPast: Word('отрезвели', 6),
  imperativeInformal: Word('отрезвей', 6),
  imperativeFormal: Word('отрезвейте', 6),
  imperfect: [],
};

perfectVerbs.set(отрезветь.name.text, отрезветь);

export { отрезветь };