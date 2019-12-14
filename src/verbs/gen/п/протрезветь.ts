import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протрезветь: PerfectVerb = {
  name: Word('протрезветь', 8),
  singular1stPerson: Word('протрезвею', 8),
  singular2ndPerson: Word('протрезвеешь', 8),
  singular3rdPerson: Word('протрезвеет', 8),
  plural1stPerson: Word('протрезвеем', 8),
  plural2ndPerson: Word('протрезвеете', 8),
  plural3rdPerson: Word('протрезвеют', 8),
  masculinePast: Word('протрезвел', 8),
  femininePast: Word('протрезвела', 8),
  neuterPast: Word('протрезвело', 8),
  pluralPast: Word('протрезвели', 8),
  imperativeInformal: Word('протрезвей', 8),
  imperativeFormal: Word('протрезвейте', 8),
  imperfect: [],
};

perfectVerbs.set(протрезветь.name.text, протрезветь);

export { протрезветь };