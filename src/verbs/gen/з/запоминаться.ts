import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запоминаться: PerfectVerb = {
  name: Word('запоминаться', 7),
  singular1stPerson: Word('запоминаюсь', 7),
  singular2ndPerson: Word('запоминаешься', 7),
  singular3rdPerson: Word('запоминается', 7),
  plural1stPerson: Word('запоминаемся', 7),
  plural2ndPerson: Word('запоминаетесь', 7),
  plural3rdPerson: Word('запоминаются', 7),
  masculinePast: Word('запоминался', 7),
  femininePast: Word('запоминалась', 7),
  neuterPast: Word('запоминалось', 7),
  pluralPast: Word('запоминались', 7),
  imperativeInformal: Word('запоминайся', 7),
  imperativeFormal: Word('запоминайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(запоминаться.name.text, запоминаться);

export { запоминаться };