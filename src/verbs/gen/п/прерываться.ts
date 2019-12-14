import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прерываться: PerfectVerb = {
  name: Word('прерываться', 6),
  singular1stPerson: Word('прерываюсь', 6),
  singular2ndPerson: Word('прерываешься', 6),
  singular3rdPerson: Word('прерывается', 6),
  plural1stPerson: Word('прерываемся', 6),
  plural2ndPerson: Word('прерываетесь', 6),
  plural3rdPerson: Word('прерываются', 6),
  masculinePast: Word('прерывался', 6),
  femininePast: Word('прерывалась', 6),
  neuterPast: Word('прерывалось', 6),
  pluralPast: Word('прерывались', 6),
  imperativeInformal: Word('прерывайся', 6),
  imperativeFormal: Word('прерывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прерываться.name.text, прерываться);

export { прерываться };