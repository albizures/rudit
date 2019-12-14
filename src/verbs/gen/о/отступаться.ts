import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отступаться: PerfectVerb = {
  name: Word('отступаться', 6),
  singular1stPerson: Word('отступаюсь', 6),
  singular2ndPerson: Word('отступаешься', 6),
  singular3rdPerson: Word('отступается', 6),
  plural1stPerson: Word('отступаемся', 6),
  plural2ndPerson: Word('отступаетесь', 6),
  plural3rdPerson: Word('отступаются', 6),
  masculinePast: Word('отступался', 6),
  femininePast: Word('отступалась', 6),
  neuterPast: Word('отступалось', 6),
  pluralPast: Word('отступались', 6),
  imperativeInformal: Word('отступайся', 6),
  imperativeFormal: Word('отступайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(отступаться.name.text, отступаться);

export { отступаться };