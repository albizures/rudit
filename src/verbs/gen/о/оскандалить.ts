import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскандалить: PerfectVerb = {
  name: Word('оскандалить', 6),
  singular1stPerson: Word('оскандалю', 6),
  singular2ndPerson: Word('оскандалишь', 6),
  singular3rdPerson: Word('оскандалит', 6),
  plural1stPerson: Word('оскандалим', 6),
  plural2ndPerson: Word('оскандалите', 6),
  plural3rdPerson: Word('оскандалят', 6),
  masculinePast: Word('оскандалил', 6),
  femininePast: Word('оскандалила', 6),
  neuterPast: Word('оскандалило', 6),
  pluralPast: Word('оскандалили', 6),
  imperativeInformal: Word('оскандаль', 6),
  imperativeFormal: Word('оскандальте', 6),
  imperfect: [],
};

perfectVerbs.set(оскандалить.name.text, оскандалить);

export { оскандалить };