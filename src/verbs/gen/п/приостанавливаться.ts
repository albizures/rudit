import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приостанавливаться: PerfectVerb = {
  name: Word('приостанавливаться', 8),
  singular1stPerson: Word('приостанавливаюсь', 8),
  singular2ndPerson: Word('приостанавливаешься', 8),
  singular3rdPerson: Word('приостанавливается', 8),
  plural1stPerson: Word('приостанавливаемся', 8),
  plural2ndPerson: Word('приостанавливаетесь', 8),
  plural3rdPerson: Word('приостанавливаются', 8),
  masculinePast: Word('приостанавливался', 8),
  femininePast: Word('приостанавливалась', 8),
  neuterPast: Word('приостанавливалось', 8),
  pluralPast: Word('приостанавливались', 8),
  imperativeInformal: Word('приостанавливайся', 8),
  imperativeFormal: Word('приостанавливайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(приостанавливаться.name.text, приостанавливаться);

export { приостанавливаться };