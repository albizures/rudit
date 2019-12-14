import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намотаться: PerfectVerb = {
  name: Word('намотаться', 5),
  singular1stPerson: Word('намотаюсь', 5),
  singular2ndPerson: Word('намотаешься', 5),
  singular3rdPerson: Word('намотается', 5),
  plural1stPerson: Word('намотаемся', 5),
  plural2ndPerson: Word('намотаетесь', 5),
  plural3rdPerson: Word('намотаются', 5),
  masculinePast: Word('намотался', 5),
  femininePast: Word('намоталась', 5),
  neuterPast: Word('намоталось', 5),
  pluralPast: Word('намотались', 5),
  imperativeInformal: Word('намотайся', 5),
  imperativeFormal: Word('намотайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(намотаться.name.text, намотаться);

export { намотаться };