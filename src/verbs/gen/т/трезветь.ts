import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трезветь: PerfectVerb = {
  name: Word('трезветь', 5),
  singular1stPerson: Word('трезвею', 5),
  singular2ndPerson: Word('трезвеешь', 5),
  singular3rdPerson: Word('трезвеет', 5),
  plural1stPerson: Word('трезвеем', 5),
  plural2ndPerson: Word('трезвеете', 5),
  plural3rdPerson: Word('трезвеют', 5),
  masculinePast: Word('трезвел', 5),
  femininePast: Word('трезвела', 5),
  neuterPast: Word('трезвело', 5),
  pluralPast: Word('трезвели', 5),
  imperativeInformal: Word('трезвей', 5),
  imperativeFormal: Word('трезвейте', 5),
  imperfect: [],
};

perfectVerbs.set(трезветь.name.text, трезветь);

export { трезветь };