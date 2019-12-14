import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приваливаться: PerfectVerb = {
  name: Word('приваливаться', 4),
  singular1stPerson: Word('приваливаюсь', 4),
  singular2ndPerson: Word('приваливаешься', 4),
  singular3rdPerson: Word('приваливается', 4),
  plural1stPerson: Word('приваливаемся', 4),
  plural2ndPerson: Word('приваливаетесь', 4),
  plural3rdPerson: Word('приваливаются', 4),
  masculinePast: Word('приваливался', 4),
  femininePast: Word('приваливалась', 4),
  neuterPast: Word('приваливалось', 4),
  pluralPast: Word('приваливались', 4),
  imperativeInformal: Word('приваливайся', 4),
  imperativeFormal: Word('приваливайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(приваливаться.name.text, приваливаться);

export { приваливаться };