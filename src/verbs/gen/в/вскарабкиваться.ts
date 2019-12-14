import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскарабкиваться: PerfectVerb = {
  name: Word('вскарабкиваться', 5),
  singular1stPerson: Word('вскарабкиваюсь', 5),
  singular2ndPerson: Word('вскарабкиваешься', 5),
  singular3rdPerson: Word('вскарабкивается', 5),
  plural1stPerson: Word('вскарабкиваемся', 5),
  plural2ndPerson: Word('вскарабкиваетесь', 5),
  plural3rdPerson: Word('вскарабкиваются', 5),
  masculinePast: Word('вскарабкивался', 5),
  femininePast: Word('вскарабкивалась', 5),
  neuterPast: Word('вскарабкивалось', 5),
  pluralPast: Word('вскарабкивались', 5),
  imperativeInformal: Word('вскарабкивайся', 5),
  imperativeFormal: Word('вскарабкивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вскарабкиваться.name.text, вскарабкиваться);

export { вскарабкиваться };