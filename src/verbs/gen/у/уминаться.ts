import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уминаться: PerfectVerb = {
  name: Word('уминаться', 4),
  singular1stPerson: Word('уминаюсь', 4),
  singular2ndPerson: Word('уминаешься', 4),
  singular3rdPerson: Word('уминается', 4),
  plural1stPerson: Word('уминаемся', 4),
  plural2ndPerson: Word('уминаетесь', 4),
  plural3rdPerson: Word('уминаются', 4),
  masculinePast: Word('уминался', 4),
  femininePast: Word('уминалась', 4),
  neuterPast: Word('уминалось', 4),
  pluralPast: Word('уминались', 4),
  imperativeInformal: Word('уминайся', 4),
  imperativeFormal: Word('уминайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(уминаться.name.text, уминаться);

export { уминаться };