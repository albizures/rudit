import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подготавливаться: PerfectVerb = {
  name: Word('подготавливаться', 6),
  singular1stPerson: Word('подготавливаюсь', 6),
  singular2ndPerson: Word('подготавливаешься', 6),
  singular3rdPerson: Word('подготавливается', 6),
  plural1stPerson: Word('подготавливаемся', 6),
  plural2ndPerson: Word('подготавливаетесь', 6),
  plural3rdPerson: Word('подготавливаются', 6),
  masculinePast: Word('подготавливался', 6),
  femininePast: Word('подготавливалась', 6),
  neuterPast: Word('подготавливалось', 6),
  pluralPast: Word('подготавливались', 6),
  imperativeInformal: Word('подготавливайся', 6),
  imperativeFormal: Word('подготавливайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подготавливаться.name.text, подготавливаться);

export { подготавливаться };