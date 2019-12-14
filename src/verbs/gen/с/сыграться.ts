import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сыграться: PerfectVerb = {
  name: Word('сыграться', 4),
  singular1stPerson: Word('сыграюсь', 4),
  singular2ndPerson: Word('сыграешься', 4),
  singular3rdPerson: Word('сыграется', 4),
  plural1stPerson: Word('сыграемся', 4),
  plural2ndPerson: Word('сыграетесь', 4),
  plural3rdPerson: Word('сыграются', 4),
  masculinePast: Word('сыгрался', 4),
  femininePast: Word('сыгралась', 4),
  neuterPast: Word('сыгралось', 4),
  pluralPast: Word('сыгрались', 4),
  imperativeInformal: Word('сыграйся', 4),
  imperativeFormal: Word('сыграйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сыграться.name.text, сыграться);

export { сыграться };