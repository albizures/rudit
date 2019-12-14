import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подыграться: PerfectVerb = {
  name: Word('подыграться', 6),
  singular1stPerson: Word('подыграюсь', 6),
  singular2ndPerson: Word('подыграешься', 6),
  singular3rdPerson: Word('подыграется', 6),
  plural1stPerson: Word('подыграемся', 6),
  plural2ndPerson: Word('подыграетесь', 6),
  plural3rdPerson: Word('подыграются', 6),
  masculinePast: Word('подыгрался', 6),
  femininePast: Word('подыгралась', 6),
  neuterPast: Word('подыгралось', 6),
  pluralPast: Word('подыгрались', 6),
  imperativeInformal: Word('подыграйся', 6),
  imperativeFormal: Word('подыграйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подыграться.name.text, подыграться);

export { подыграться };