import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полить: PerfectVerb = {
  name: Word('полить', 3),
  singular1stPerson: Word('полью', 4),
  singular2ndPerson: Word('польёшь', 1),
  singular3rdPerson: Word('польёт', 1),
  plural1stPerson: Word('польём', 1),
  plural2ndPerson: Word('польёте', 6),
  plural3rdPerson: Word('польют', 4),
  masculinePast: Word('полил//по'лил', 3),
  femininePast: Word('полила', 5),
  neuterPast: Word('полило//по'лило', 3),
  pluralPast: Word('полили//по'лили', 3),
  imperativeInformal: Word('полей', 3),
  imperativeFormal: Word('полейте', 3),
  imperfect: [],
};

perfectVerbs.set(полить.name.text, полить);

export { полить };