import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстраиваться: PerfectVerb = {
  name: Word('подстраиваться', 6),
  singular1stPerson: Word('подстраиваюсь', 6),
  singular2ndPerson: Word('подстраиваешься', 6),
  singular3rdPerson: Word('подстраивается', 6),
  plural1stPerson: Word('подстраиваемся', 6),
  plural2ndPerson: Word('подстраиваетесь', 6),
  plural3rdPerson: Word('подстраиваются', 6),
  masculinePast: Word('подстраивался', 6),
  femininePast: Word('подстраивалась', 6),
  neuterPast: Word('подстраивалось', 6),
  pluralPast: Word('подстраивались', 6),
  imperativeInformal: Word('подстраивайся', 6),
  imperativeFormal: Word('подстраивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подстраиваться.name.text, подстраиваться);

export { подстраиваться };