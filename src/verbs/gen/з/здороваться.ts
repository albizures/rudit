import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const здороваться: PerfectVerb = {
  name: Word('здороваться', 4),
  singular1stPerson: Word('здороваюсь', 4),
  singular2ndPerson: Word('здороваешься', 4),
  singular3rdPerson: Word('здоровается', 4),
  plural1stPerson: Word('здороваемся', 4),
  plural2ndPerson: Word('здороваетесь', 4),
  plural3rdPerson: Word('здороваются', 4),
  masculinePast: Word('здоровался', 4),
  femininePast: Word('здоровалась', 4),
  neuterPast: Word('здоровалось', 4),
  pluralPast: Word('здоровались', 4),
  imperativeInformal: Word('здоровайся', 4),
  imperativeFormal: Word('здоровайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(здороваться.name.text, здороваться);

export { здороваться };