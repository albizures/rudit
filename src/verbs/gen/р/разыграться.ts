import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разыграться: PerfectVerb = {
  name: Word('разыграться', 6),
  singular1stPerson: Word('разыграюсь', 6),
  singular2ndPerson: Word('разыграешься', 6),
  singular3rdPerson: Word('разыграется', 6),
  plural1stPerson: Word('разыграемся', 6),
  plural2ndPerson: Word('разыграетесь', 6),
  plural3rdPerson: Word('разыграются', 6),
  masculinePast: Word('разыгрался', 6),
  femininePast: Word('разыгралась', 6),
  neuterPast: Word('разыгралось', 6),
  pluralPast: Word('разыгрались', 6),
  imperativeInformal: Word('разыграйся', 6),
  imperativeFormal: Word('разыграйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разыграться.name.text, разыграться);

export { разыграться };