import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протаранить: PerfectVerb = {
  name: Word('протаранить', 6),
  singular1stPerson: Word('протараню', 6),
  singular2ndPerson: Word('протаранишь', 6),
  singular3rdPerson: Word('протаранит', 6),
  plural1stPerson: Word('протараним', 6),
  plural2ndPerson: Word('протараните', 6),
  plural3rdPerson: Word('протаранят', 6),
  masculinePast: Word('протаранил', 6),
  femininePast: Word('протаранила', 6),
  neuterPast: Word('протаранило', 6),
  pluralPast: Word('протаранили', 6),
  imperativeInformal: Word('протарань', 6),
  imperativeFormal: Word('протараньте', 6),
  imperfect: [],
};

perfectVerbs.set(протаранить.name.text, протаранить);

export { протаранить };