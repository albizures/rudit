import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истрепаться: PerfectVerb = {
  name: Word('истрепаться', 6),
  singular1stPerson: Word('истреплюсь', 7),
  singular2ndPerson: Word('истреплешься', 4),
  singular3rdPerson: Word('истреплется', 4),
  plural1stPerson: Word('истреплемся', 4),
  plural2ndPerson: Word('истреплетесь', 4),
  plural3rdPerson: Word('истреплются', 4),
  masculinePast: Word('истрепался', 6),
  femininePast: Word('истрепалась', 6),
  neuterPast: Word('истрепалось', 6),
  pluralPast: Word('истрепались', 6),
  imperativeInformal: Word('истреплись', 7),
  imperativeFormal: Word('истреплитесь', 7),
  imperfect: [],
};

perfectVerbs.set(истрепаться.name.text, истрепаться);

export { истрепаться };