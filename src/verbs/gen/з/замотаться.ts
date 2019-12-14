import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замотаться: PerfectVerb = {
  name: Word('замотаться', 5),
  singular1stPerson: Word('замотаюсь', 5),
  singular2ndPerson: Word('замотаешься', 5),
  singular3rdPerson: Word('замотается', 5),
  plural1stPerson: Word('замотаемся', 5),
  plural2ndPerson: Word('замотаетесь', 5),
  plural3rdPerson: Word('замотаются', 5),
  masculinePast: Word('замотался', 5),
  femininePast: Word('замоталась', 5),
  neuterPast: Word('замоталось', 5),
  pluralPast: Word('замотались', 5),
  imperativeInformal: Word('замотайся', 5),
  imperativeFormal: Word('замотайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(замотаться.name.text, замотаться);

export { замотаться };