import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const калечить: PerfectVerb = {
  name: Word('калечить', 3),
  singular1stPerson: Word('калечу', 3),
  singular2ndPerson: Word('калечишь', 3),
  singular3rdPerson: Word('калечит', 3),
  plural1stPerson: Word('калечим', 3),
  plural2ndPerson: Word('калечите', 3),
  plural3rdPerson: Word('калечат', 3),
  masculinePast: Word('калечил', 3),
  femininePast: Word('калечила', 3),
  neuterPast: Word('калечило', 3),
  pluralPast: Word('калечили', 3),
  imperativeInformal: Word('калечь', 3),
  imperativeFormal: Word('калечьте', 3),
  imperfect: [],
};

perfectVerbs.set(калечить.name.text, калечить);

export { калечить };