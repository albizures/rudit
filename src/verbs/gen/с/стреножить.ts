import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стреножить: PerfectVerb = {
  name: Word('стреножить', 5),
  singular1stPerson: Word('стреножу', 5),
  singular2ndPerson: Word('стреножишь', 5),
  singular3rdPerson: Word('стреножит', 5),
  plural1stPerson: Word('стреножим', 5),
  plural2ndPerson: Word('стреножите', 5),
  plural3rdPerson: Word('стреножат', 5),
  masculinePast: Word('стреножил', 5),
  femininePast: Word('стреножила', 5),
  neuterPast: Word('стреножило', 5),
  pluralPast: Word('стреножили', 5),
  imperativeInformal: Word('стреножь', 5),
  imperativeFormal: Word('стреножьте', 5),
  imperfect: [],
};

perfectVerbs.set(стреножить.name.text, стреножить);

export { стреножить };