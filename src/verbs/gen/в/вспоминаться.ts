import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспоминаться: PerfectVerb = {
  name: Word('вспоминаться', 7),
  singular1stPerson: Word('вспоминаюсь', 7),
  singular2ndPerson: Word('вспоминаешься', 7),
  singular3rdPerson: Word('вспоминается', 7),
  plural1stPerson: Word('вспоминаемся', 7),
  plural2ndPerson: Word('вспоминаетесь', 7),
  plural3rdPerson: Word('вспоминаются', 7),
  masculinePast: Word('вспоминался', 7),
  femininePast: Word('вспоминалась', 7),
  neuterPast: Word('вспоминалось', 7),
  pluralPast: Word('вспоминались', 7),
  imperativeInformal: Word('вспоминайся', 7),
  imperativeFormal: Word('вспоминайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(вспоминаться.name.text, вспоминаться);

export { вспоминаться };