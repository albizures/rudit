import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уваливаться: PerfectVerb = {
  name: Word('уваливаться', 2),
  singular1stPerson: Word('уваливаюсь', 2),
  singular2ndPerson: Word('уваливаешься', 2),
  singular3rdPerson: Word('уваливается', 2),
  plural1stPerson: Word('уваливаемся', 2),
  plural2ndPerson: Word('уваливаетесь', 2),
  plural3rdPerson: Word('уваливаются', 2),
  masculinePast: Word('уваливался', 2),
  femininePast: Word('уваливалась', 2),
  neuterPast: Word('уваливалось', 2),
  pluralPast: Word('уваливались', 2),
  imperativeInformal: Word('уваливайся', 2),
  imperativeFormal: Word('уваливайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(уваливаться.name.text, уваливаться);

export { уваливаться };