import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымотаться: PerfectVerb = {
  name: Word('вымотаться', 1),
  singular1stPerson: Word('вымотаюсь', 1),
  singular2ndPerson: Word('вымотаешься', 1),
  singular3rdPerson: Word('вымотается', 1),
  plural1stPerson: Word('вымотаемся', 1),
  plural2ndPerson: Word('вымотаетесь', 1),
  plural3rdPerson: Word('вымотаются', 1),
  masculinePast: Word('вымотался', 1),
  femininePast: Word('вымоталась', 1),
  neuterPast: Word('вымоталось', 1),
  pluralPast: Word('вымотались', 1),
  imperativeInformal: Word('вымотайся', 1),
  imperativeFormal: Word('вымотайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(вымотаться.name.text, вымотаться);

export { вымотаться };