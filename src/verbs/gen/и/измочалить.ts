import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измочалить: PerfectVerb = {
  name: Word('измочалить', 5),
  singular1stPerson: Word('измочалю', 5),
  singular2ndPerson: Word('измочалишь', 5),
  singular3rdPerson: Word('измочалит', 5),
  plural1stPerson: Word('измочалим', 5),
  plural2ndPerson: Word('измочалите', 5),
  plural3rdPerson: Word('измочалят', 5),
  masculinePast: Word('измочалил', 5),
  femininePast: Word('измочалила', 5),
  neuterPast: Word('измочалило', 5),
  pluralPast: Word('измочалили', 5),
  imperativeInformal: Word('измочаль', 5),
  imperativeFormal: Word('измочальте', 5),
  imperfect: [],
};

perfectVerbs.set(измочалить.name.text, измочалить);

export { измочалить };