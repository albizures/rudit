import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдавливаться: PerfectVerb = {
  name: Word('выдавливаться', 3),
  singular1stPerson: Word('выдавливаюсь', 3),
  singular2ndPerson: Word('выдавливаешься', 3),
  singular3rdPerson: Word('выдавливается', 3),
  plural1stPerson: Word('выдавливаемся', 3),
  plural2ndPerson: Word('выдавливаетесь', 3),
  plural3rdPerson: Word('выдавливаются', 3),
  masculinePast: Word('выдавливался', 3),
  femininePast: Word('выдавливалась', 3),
  neuterPast: Word('выдавливалось', 3),
  pluralPast: Word('выдавливались', 3),
  imperativeInformal: Word('выдавливайся', 3),
  imperativeFormal: Word('выдавливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выдавливаться.name.text, выдавливаться);

export { выдавливаться };