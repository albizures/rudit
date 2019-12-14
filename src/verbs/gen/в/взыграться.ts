import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взыграться: PerfectVerb = {
  name: Word('взыграться', 5),
  singular1stPerson: Word('взыграюсь', 5),
  singular2ndPerson: Word('взыграешься', 5),
  singular3rdPerson: Word('взыграется', 5),
  plural1stPerson: Word('взыграемся', 5),
  plural2ndPerson: Word('взыграетесь', 5),
  plural3rdPerson: Word('взыграются', 5),
  masculinePast: Word('взыгрался', 5),
  femininePast: Word('взыгралась', 5),
  neuterPast: Word('взыгралось', 5),
  pluralPast: Word('взыгрались', 5),
  imperativeInformal: Word('взыграйся', 5),
  imperativeFormal: Word('взыграйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(взыграться.name.text, взыграться);

export { взыграться };