import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вступаться: PerfectVerb = {
  name: Word('вступаться', 5),
  singular1stPerson: Word('вступаюсь', 5),
  singular2ndPerson: Word('вступаешься', 5),
  singular3rdPerson: Word('вступается', 5),
  plural1stPerson: Word('вступаемся', 5),
  plural2ndPerson: Word('вступаетесь', 5),
  plural3rdPerson: Word('вступаются', 5),
  masculinePast: Word('вступался', 5),
  femininePast: Word('вступалась', 5),
  neuterPast: Word('вступалось', 5),
  pluralPast: Word('вступались', 5),
  imperativeInformal: Word('вступайся', 5),
  imperativeFormal: Word('вступайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вступаться.name.text, вступаться);

export { вступаться };