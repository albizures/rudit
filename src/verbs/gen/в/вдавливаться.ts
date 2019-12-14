import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдавливаться: PerfectVerb = {
  name: Word('вдавливаться', 2),
  singular1stPerson: Word('вдавливаюсь', 2),
  singular2ndPerson: Word('вдавливаешься', 2),
  singular3rdPerson: Word('вдавливается', 2),
  plural1stPerson: Word('вдавливаемся', 2),
  plural2ndPerson: Word('вдавливаетесь', 2),
  plural3rdPerson: Word('вдавливаются', 2),
  masculinePast: Word('вдавливался', 2),
  femininePast: Word('вдавливалась', 2),
  neuterPast: Word('вдавливалось', 2),
  pluralPast: Word('вдавливались', 2),
  imperativeInformal: Word('вдавливайся', 2),
  imperativeFormal: Word('вдавливайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(вдавливаться.name.text, вдавливаться);

export { вдавливаться };