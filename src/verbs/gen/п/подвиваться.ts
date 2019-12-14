import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвиваться: PerfectVerb = {
  name: Word('подвиваться', 6),
  singular1stPerson: Word('подвиваюсь', 6),
  singular2ndPerson: Word('подвиваешься', 6),
  singular3rdPerson: Word('подвивается', 6),
  plural1stPerson: Word('подвиваемся', 6),
  plural2ndPerson: Word('подвиваетесь', 6),
  plural3rdPerson: Word('подвиваются', 6),
  masculinePast: Word('подвивался', 6),
  femininePast: Word('подвивалась', 6),
  neuterPast: Word('подвивалось', 6),
  pluralPast: Word('подвивались', 6),
  imperativeInformal: Word('подвивайся', 6),
  imperativeFormal: Word('подвивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подвиваться.name.text, подвиваться);

export { подвиваться };