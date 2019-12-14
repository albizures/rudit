import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зубоскалить: PerfectVerb = {
  name: Word('зубоскалить', 6),
  singular1stPerson: Word('зубоскалю', 6),
  singular2ndPerson: Word('зубоскалишь', 6),
  singular3rdPerson: Word('зубоскалит', 6),
  plural1stPerson: Word('зубоскалим', 6),
  plural2ndPerson: Word('зубоскалите', 6),
  plural3rdPerson: Word('зубоскалят', 6),
  masculinePast: Word('зубоскалил', 6),
  femininePast: Word('зубоскалила', 6),
  neuterPast: Word('зубоскалило', 6),
  pluralPast: Word('зубоскалили', 6),
  imperativeInformal: Word('зубоскаль', 6),
  imperativeFormal: Word('зубоскальте', 6),
  imperfect: [],
};

perfectVerbs.set(зубоскалить.name.text, зубоскалить);

export { зубоскалить };