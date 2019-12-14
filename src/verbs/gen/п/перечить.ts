import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечить: PerfectVerb = {
  name: Word('перечить', 3),
  singular1stPerson: Word('перечу', 3),
  singular2ndPerson: Word('перечишь', 3),
  singular3rdPerson: Word('перечит', 3),
  plural1stPerson: Word('перечим', 3),
  plural2ndPerson: Word('перечите', 3),
  plural3rdPerson: Word('перечат', 3),
  masculinePast: Word('перечил', 3),
  femininePast: Word('перечила', 3),
  neuterPast: Word('перечило', 3),
  pluralPast: Word('перечили', 3),
  imperativeInformal: Word('перечь', 3),
  imperativeFormal: Word('перечьте', 3),
  imperfect: [],
};

perfectVerbs.set(перечить.name.text, перечить);

export { перечить };