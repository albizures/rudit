import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажираться: PerfectVerb = {
  name: Word('нажираться', 5),
  singular1stPerson: Word('нажираюсь', 5),
  singular2ndPerson: Word('нажираешься', 5),
  singular3rdPerson: Word('нажирается', 5),
  plural1stPerson: Word('нажираемся', 5),
  plural2ndPerson: Word('нажираетесь', 5),
  plural3rdPerson: Word('нажираются', 5),
  masculinePast: Word('нажирался', 5),
  femininePast: Word('нажиралась', 5),
  neuterPast: Word('нажиралось', 5),
  pluralPast: Word('нажирались', 5),
  imperativeInformal: Word('нажирайся', 5),
  imperativeFormal: Word('нажирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(нажираться.name.text, нажираться);

export { нажираться };