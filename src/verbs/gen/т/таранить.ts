import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const таранить: PerfectVerb = {
  name: Word('таранить', 3),
  singular1stPerson: Word('тараню', 3),
  singular2ndPerson: Word('таранишь', 3),
  singular3rdPerson: Word('таранит', 3),
  plural1stPerson: Word('тараним', 3),
  plural2ndPerson: Word('тараните', 3),
  plural3rdPerson: Word('таранят', 3),
  masculinePast: Word('таранил', 3),
  femininePast: Word('таранила', 3),
  neuterPast: Word('таранило', 3),
  pluralPast: Word('таранили', 3),
  imperativeInformal: Word('тарань', 3),
  imperativeFormal: Word('тараньте', 3),
  imperfect: [],
};

perfectVerbs.set(таранить.name.text, таранить);

export { таранить };