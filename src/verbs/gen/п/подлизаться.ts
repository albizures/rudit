import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлизаться: PerfectVerb = {
  name: Word('подлизаться', 6),
  singular1stPerson: Word('подлижусь', 6),
  singular2ndPerson: Word('подлижешься', 4),
  singular3rdPerson: Word('подлижется', 4),
  plural1stPerson: Word('подлижемся', 4),
  plural2ndPerson: Word('подлижетесь', 4),
  plural3rdPerson: Word('подлижутся', 4),
  masculinePast: Word('подлизался', 6),
  femininePast: Word('подлизалась', 6),
  neuterPast: Word('подлизалось', 6),
  pluralPast: Word('подлизались', 6),
  imperativeInformal: Word('подлижись', 6),
  imperativeFormal: Word('подлижитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подлизаться.name.text, подлизаться);

export { подлизаться };