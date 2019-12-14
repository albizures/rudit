import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прихватить: PerfectVerb = {
  name: Word('прихватить', 7),
  singular1stPerson: Word('прихвачу', 7),
  singular2ndPerson: Word('прихватишь', 5),
  singular3rdPerson: Word('прихватит', 5),
  plural1stPerson: Word('прихватим', 5),
  plural2ndPerson: Word('прихватите', 5),
  plural3rdPerson: Word('прихватят', 5),
  masculinePast: Word('прихватил', 7),
  femininePast: Word('прихватила', 7),
  neuterPast: Word('прихватило', 7),
  pluralPast: Word('прихватили', 7),
  imperativeInformal: Word('прихвати', 7),
  imperativeFormal: Word('прихватите', 7),
  imperfect: [],
};

perfectVerbs.set(прихватить.name.text, прихватить);

export { прихватить };