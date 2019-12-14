import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const питаться: PerfectVerb = {
  name: Word('питаться', 3),
  singular1stPerson: Word('питаюсь', 3),
  singular2ndPerson: Word('питаешься', 3),
  singular3rdPerson: Word('питается', 3),
  plural1stPerson: Word('питаемся', 3),
  plural2ndPerson: Word('питаетесь', 3),
  plural3rdPerson: Word('питаются', 3),
  masculinePast: Word('питался', 3),
  femininePast: Word('питалась', 3),
  neuterPast: Word('питалось', 3),
  pluralPast: Word('питались', 3),
  imperativeInformal: Word('питайся', 3),
  imperativeFormal: Word('питайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(питаться.name.text, питаться);

export { питаться };