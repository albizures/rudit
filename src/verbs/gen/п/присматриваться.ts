import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присматриваться: PerfectVerb = {
  name: Word('присматриваться', 5),
  singular1stPerson: Word('присматриваюсь', 5),
  singular2ndPerson: Word('присматриваешься', 5),
  singular3rdPerson: Word('присматривается', 5),
  plural1stPerson: Word('присматриваемся', 5),
  plural2ndPerson: Word('присматриваетесь', 5),
  plural3rdPerson: Word('присматриваются', 5),
  masculinePast: Word('присматривался', 5),
  femininePast: Word('присматривалась', 5),
  neuterPast: Word('присматривалось', 5),
  pluralPast: Word('присматривались', 5),
  imperativeInformal: Word('присматривайся', 5),
  imperativeFormal: Word('присматривайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(присматриваться.name.text, присматриваться);

export { присматриваться };