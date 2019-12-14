import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размножить: PerfectVerb = {
  name: Word('размножить', 5),
  singular1stPerson: Word('размножу', 5),
  singular2ndPerson: Word('размножишь', 5),
  singular3rdPerson: Word('размножит', 5),
  plural1stPerson: Word('размножим', 5),
  plural2ndPerson: Word('размножите', 5),
  plural3rdPerson: Word('размножат', 5),
  masculinePast: Word('размножил', 5),
  femininePast: Word('размножила', 5),
  neuterPast: Word('размножило', 5),
  pluralPast: Word('размножили', 5),
  imperativeInformal: Word('размножь', 5),
  imperativeFormal: Word('размножьте', 5),
  imperfect: [],
};

perfectVerbs.set(размножить.name.text, размножить);

export { размножить };