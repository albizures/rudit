import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трезвонить: PerfectVerb = {
  name: Word('трезвонить', 5),
  singular1stPerson: Word('трезвоню', 5),
  singular2ndPerson: Word('трезвонишь', 5),
  singular3rdPerson: Word('трезвонит', 5),
  plural1stPerson: Word('трезвоним', 5),
  plural2ndPerson: Word('трезвоните', 5),
  plural3rdPerson: Word('трезвонят', 5),
  masculinePast: Word('трезвонил', 5),
  femininePast: Word('трезвонила', 5),
  neuterPast: Word('трезвонило', 5),
  pluralPast: Word('трезвонили', 5),
  imperativeInformal: Word('трезвонь', 5),
  imperativeFormal: Word('трезвоньте', 5),
  imperfect: [],
};

perfectVerbs.set(трезвонить.name.text, трезвонить);

export { трезвонить };