import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикатываться: PerfectVerb = {
  name: Word('прикатываться', 4),
  singular1stPerson: Word('прикатываюсь', 4),
  singular2ndPerson: Word('прикатываешься', 4),
  singular3rdPerson: Word('прикатывается', 4),
  plural1stPerson: Word('прикатываемся', 4),
  plural2ndPerson: Word('прикатываетесь', 4),
  plural3rdPerson: Word('прикатываются', 4),
  masculinePast: Word('прикатывался', 4),
  femininePast: Word('прикатывалась', 4),
  neuterPast: Word('прикатывалось', 4),
  pluralPast: Word('прикатывались', 4),
  imperativeInformal: Word('прикатывайся', 4),
  imperativeFormal: Word('прикатывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прикатываться.name.text, прикатываться);

export { прикатываться };