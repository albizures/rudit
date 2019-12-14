import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрепаться: PerfectVerb = {
  name: Word('потрепаться', 6),
  singular1stPerson: Word('потреплюсь', 7),
  singular2ndPerson: Word('потреплешься', 4),
  singular3rdPerson: Word('потреплется', 4),
  plural1stPerson: Word('потреплемся', 4),
  plural2ndPerson: Word('потреплетесь', 4),
  plural3rdPerson: Word('потреплются', 4),
  masculinePast: Word('потрепался', 6),
  femininePast: Word('потрепалась', 6),
  neuterPast: Word('потрепалось', 6),
  pluralPast: Word('потрепались', 6),
  imperativeInformal: Word('потреплись', 7),
  imperativeFormal: Word('потреплитесь', 7),
  imperfect: [],
};

perfectVerbs.set(потрепаться.name.text, потрепаться);

export { потрепаться };