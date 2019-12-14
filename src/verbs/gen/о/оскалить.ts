import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскалить: PerfectVerb = {
  name: Word('оскалить', 3),
  singular1stPerson: Word('оскалю', 3),
  singular2ndPerson: Word('оскалишь', 3),
  singular3rdPerson: Word('оскалит', 3),
  plural1stPerson: Word('оскалим', 3),
  plural2ndPerson: Word('оскалите', 3),
  plural3rdPerson: Word('оскалят', 3),
  masculinePast: Word('оскалил', 3),
  femininePast: Word('оскалила', 3),
  neuterPast: Word('оскалило', 3),
  pluralPast: Word('оскалили', 3),
  imperativeInformal: Word('оскаль', 3),
  imperativeFormal: Word('оскальте', 3),
  imperfect: [],
};

perfectVerbs.set(оскалить.name.text, оскалить);

export { оскалить };