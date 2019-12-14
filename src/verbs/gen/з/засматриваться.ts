import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засматриваться: PerfectVerb = {
  name: Word('засматриваться', 4),
  singular1stPerson: Word('засматриваюсь', 4),
  singular2ndPerson: Word('засматриваешься', 4),
  singular3rdPerson: Word('засматривается', 4),
  plural1stPerson: Word('засматриваемся', 4),
  plural2ndPerson: Word('засматриваетесь', 4),
  plural3rdPerson: Word('засматриваются', 4),
  masculinePast: Word('засматривался', 4),
  femininePast: Word('засматривалась', 4),
  neuterPast: Word('засматривалось', 4),
  pluralPast: Word('засматривались', 4),
  imperativeInformal: Word('засматривайся', 4),
  imperativeFormal: Word('засматривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(засматриваться.name.text, засматриваться);

export { засматриваться };