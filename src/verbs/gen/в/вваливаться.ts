import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вваливаться: PerfectVerb = {
  name: Word('вваливаться', 2),
  singular1stPerson: Word('вваливаюсь', 2),
  singular2ndPerson: Word('вваливаешься', 2),
  singular3rdPerson: Word('вваливается', 2),
  plural1stPerson: Word('вваливаемся', 2),
  plural2ndPerson: Word('вваливаетесь', 2),
  plural3rdPerson: Word('вваливаются', 2),
  masculinePast: Word('вваливался', 2),
  femininePast: Word('вваливалась', 2),
  neuterPast: Word('вваливалось', 2),
  pluralPast: Word('вваливались', 2),
  imperativeInformal: Word('вваливайся', 2),
  imperativeFormal: Word('вваливайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(вваливаться.name.text, вваливаться);

export { вваливаться };