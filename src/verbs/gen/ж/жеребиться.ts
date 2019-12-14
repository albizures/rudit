import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жеребиться: PerfectVerb = {
  name: Word('жеребиться', 5),
  singular1stPerson: Word('жереблюсь', 6),
  singular2ndPerson: Word('жеребишься', 5),
  singular3rdPerson: Word('жеребится', 5),
  plural1stPerson: Word('жеребимся', 5),
  plural2ndPerson: Word('жеребитесь', 5),
  plural3rdPerson: Word('жеребятся', 5),
  masculinePast: Word('жеребился', 5),
  femininePast: Word('жеребилась', 5),
  neuterPast: Word('жеребилось', 5),
  pluralPast: Word('жеребились', 5),
  imperativeInformal: Word('жеребись', 5),
  imperativeFormal: Word('жеребитесь', 5),
  imperfect: [],
};

perfectVerbs.set(жеребиться.name.text, жеребиться);

export { жеребиться };