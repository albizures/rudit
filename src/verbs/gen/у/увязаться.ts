import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увязаться: PerfectVerb = {
  name: Word('увязаться', 4),
  singular1stPerson: Word('увяжусь', 4),
  singular2ndPerson: Word('увяжешься', 2),
  singular3rdPerson: Word('увяжется', 2),
  plural1stPerson: Word('увяжемся', 2),
  plural2ndPerson: Word('увяжетесь', 2),
  plural3rdPerson: Word('увяжутся', 2),
  masculinePast: Word('увязался', 4),
  femininePast: Word('увязалась', 4),
  neuterPast: Word('увязалось', 4),
  pluralPast: Word('увязались', 4),
  imperativeInformal: Word('увяжись', 4),
  imperativeFormal: Word('увяжитесь', 4),
  imperfect: [],
};

perfectVerbs.set(увязаться.name.text, увязаться);

export { увязаться };