import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соболезновать: PerfectVerb = {
  name: Word('соболезновать', 5),
  singular1stPerson: Word('соболезную', 5),
  singular2ndPerson: Word('соболезнуешь', 5),
  singular3rdPerson: Word('соболезнует', 5),
  plural1stPerson: Word('соболезнуем', 5),
  plural2ndPerson: Word('соболезнуете', 5),
  plural3rdPerson: Word('соболезнуют', 5),
  masculinePast: Word('соболезновал', 5),
  femininePast: Word('соболезновала', 5),
  neuterPast: Word('соболезновало', 5),
  pluralPast: Word('соболезновали', 5),
  imperativeInformal: Word('соболезнуй', 5),
  imperativeFormal: Word('соболезнуйте', 5),
  imperfect: [],
};

perfectVerbs.set(соболезновать.name.text, соболезновать);

export { соболезновать };