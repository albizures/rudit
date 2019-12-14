import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развариваться: PerfectVerb = {
  name: Word('развариваться', 4),
  singular1stPerson: Word('развариваюсь', 4),
  singular2ndPerson: Word('развариваешься', 4),
  singular3rdPerson: Word('разваривается', 4),
  plural1stPerson: Word('развариваемся', 4),
  plural2ndPerson: Word('развариваетесь', 4),
  plural3rdPerson: Word('развариваются', 4),
  masculinePast: Word('разваривался', 4),
  femininePast: Word('разваривалась', 4),
  neuterPast: Word('разваривалось', 4),
  pluralPast: Word('разваривались', 4),
  imperativeInformal: Word('разваривайся', 4),
  imperativeFormal: Word('разваривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(развариваться.name.text, развариваться);

export { развариваться };