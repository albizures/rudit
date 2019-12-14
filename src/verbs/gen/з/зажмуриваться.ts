import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажмуриваться: PerfectVerb = {
  name: Word('зажмуриваться', 4),
  singular1stPerson: Word('зажмуриваюсь', 4),
  singular2ndPerson: Word('зажмуриваешься', 4),
  singular3rdPerson: Word('зажмуривается', 4),
  plural1stPerson: Word('зажмуриваемся', 4),
  plural2ndPerson: Word('зажмуриваетесь', 4),
  plural3rdPerson: Word('зажмуриваются', 4),
  masculinePast: Word('зажмуривался', 4),
  femininePast: Word('зажмуривалась', 4),
  neuterPast: Word('зажмуривалось', 4),
  pluralPast: Word('зажмуривались', 4),
  imperativeInformal: Word('зажмуривайся', 4),
  imperativeFormal: Word('зажмуривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(зажмуриваться.name.text, зажмуриваться);

export { зажмуриваться };