import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всматриваться: PerfectVerb = {
  name: Word('всматриваться', 3),
  singular1stPerson: Word('всматриваюсь', 3),
  singular2ndPerson: Word('всматриваешься', 3),
  singular3rdPerson: Word('всматривается', 3),
  plural1stPerson: Word('всматриваемся', 3),
  plural2ndPerson: Word('всматриваетесь', 3),
  plural3rdPerson: Word('всматриваются', 3),
  masculinePast: Word('всматривался', 3),
  femininePast: Word('всматривалась', 3),
  neuterPast: Word('всматривалось', 3),
  pluralPast: Word('всматривались', 3),
  imperativeInformal: Word('всматривайся', 3),
  imperativeFormal: Word('всматривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(всматриваться.name.text, всматриваться);

export { всматриваться };