import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const драпироваться: PerfectVerb = {
  name: Word('драпироваться', 8),
  singular1stPerson: Word('драпируюсь', 6),
  singular2ndPerson: Word('драпируешься', 6),
  singular3rdPerson: Word('драпируется', 6),
  plural1stPerson: Word('драпируемся', 6),
  plural2ndPerson: Word('драпируетесь', 6),
  plural3rdPerson: Word('драпируются', 6),
  masculinePast: Word('драпировался', 8),
  femininePast: Word('драпировалась', 8),
  neuterPast: Word('драпировалось', 8),
  pluralPast: Word('драпировались', 8),
  imperativeInformal: Word('драпируйся', 6),
  imperativeFormal: Word('драпируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(драпироваться.name.text, драпироваться);

export { драпироваться };