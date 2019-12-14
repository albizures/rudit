import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтрепаться: PerfectVerb = {
  name: Word('обтрепаться', 6),
  singular1stPerson: Word('обтреплюсь', 7),
  singular2ndPerson: Word('обтреплешься', 4),
  singular3rdPerson: Word('обтреплется', 4),
  plural1stPerson: Word('обтреплемся', 4),
  plural2ndPerson: Word('обтреплетесь', 4),
  plural3rdPerson: Word('обтреплются', 4),
  masculinePast: Word('обтрепался', 6),
  femininePast: Word('обтрепалась', 6),
  neuterPast: Word('обтрепалось', 6),
  pluralPast: Word('обтрепались', 6),
  imperativeInformal: Word('обтреплись', 7),
  imperativeFormal: Word('обтреплитесь', 7),
  imperfect: [],
};

perfectVerbs.set(обтрепаться.name.text, обтрепаться);

export { обтрепаться };