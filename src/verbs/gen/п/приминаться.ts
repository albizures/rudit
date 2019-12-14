import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приминаться: PerfectVerb = {
  name: Word('приминаться', 6),
  singular1stPerson: Word('приминаюсь', 6),
  singular2ndPerson: Word('приминаешься', 6),
  singular3rdPerson: Word('приминается', 6),
  plural1stPerson: Word('приминаемся', 6),
  plural2ndPerson: Word('приминаетесь', 6),
  plural3rdPerson: Word('приминаются', 6),
  masculinePast: Word('приминался', 6),
  femininePast: Word('приминалась', 6),
  neuterPast: Word('приминалось', 6),
  pluralPast: Word('приминались', 6),
  imperativeInformal: Word('приминайся', 6),
  imperativeFormal: Word('приминайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(приминаться.name.text, приминаться);

export { приминаться };