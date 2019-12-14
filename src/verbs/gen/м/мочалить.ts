import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мочалить: PerfectVerb = {
  name: Word('мочалить', 3),
  singular1stPerson: Word('мочалю', 3),
  singular2ndPerson: Word('мочалишь', 3),
  singular3rdPerson: Word('мочалит', 3),
  plural1stPerson: Word('мочалим', 3),
  plural2ndPerson: Word('мочалите', 3),
  plural3rdPerson: Word('мочалят', 3),
  masculinePast: Word('мочалил', 3),
  femininePast: Word('мочалила', 3),
  neuterPast: Word('мочалило', 3),
  pluralPast: Word('мочалили', 3),
  imperativeInformal: Word('мочаль', 3),
  imperativeFormal: Word('мочальте', 3),
  imperfect: [],
};

perfectVerbs.set(мочалить.name.text, мочалить);

export { мочалить };