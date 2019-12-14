import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мотаться: PerfectVerb = {
  name: Word('мотаться', 3),
  singular1stPerson: Word('мотаюсь', 3),
  singular2ndPerson: Word('мотаешься', 3),
  singular3rdPerson: Word('мотается', 3),
  plural1stPerson: Word('мотаемся', 3),
  plural2ndPerson: Word('мотаетесь', 3),
  plural3rdPerson: Word('мотаются', 3),
  masculinePast: Word('мотался', 3),
  femininePast: Word('моталась', 3),
  neuterPast: Word('моталось', 3),
  pluralPast: Word('мотались', 3),
  imperativeInformal: Word('мотайся', 3),
  imperativeFormal: Word('мотайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(мотаться.name.text, мотаться);

export { мотаться };