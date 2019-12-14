import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впрячься: PerfectVerb = {
  name: Word('впрячься', 3),
  singular1stPerson: Word('впрягусь', 5),
  singular2ndPerson: Word('впряжёшься', 5),
  singular3rdPerson: Word('впряжётся', 5),
  plural1stPerson: Word('впряжёмся', 5),
  plural2ndPerson: Word('впряжётесь', 5),
  plural3rdPerson: Word('впрягутся', 5),
  masculinePast: Word('впрягся', 3),
  femininePast: Word('впряглась', 6),
  neuterPast: Word('впряглось', 6),
  pluralPast: Word('впряглись', 6),
  imperativeInformal: Word('впрягись', 5),
  imperativeFormal: Word('впрягитесь', 5),
  imperfect: [],
};

perfectVerbs.set(впрячься.name.text, впрячься);

export { впрячься };