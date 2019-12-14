import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвизаться: PerfectVerb = {
  name: Word('подвизаться', 6),
  singular1stPerson: Word('подвизаюсь', 6),
  singular2ndPerson: Word('подвизаешься', 6),
  singular3rdPerson: Word('подвизается', 6),
  plural1stPerson: Word('подвизаемся', 6),
  plural2ndPerson: Word('подвизаетесь', 6),
  plural3rdPerson: Word('подвизаются', 6),
  masculinePast: Word('подвизался', 6),
  femininePast: Word('подвизалась', 6),
  neuterPast: Word('подвизалось', 6),
  pluralPast: Word('подвизались', 6),
  imperativeInformal: Word('подвизайся', 6),
  imperativeFormal: Word('подвизайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подвизаться.name.text, подвизаться);

export { подвизаться };