import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прощупываться: PerfectVerb = {
  name: Word('прощупываться', 4),
  singular1stPerson: Word('прощупываюсь', 4),
  singular2ndPerson: Word('прощупываешься', 4),
  singular3rdPerson: Word('прощупывается', 4),
  plural1stPerson: Word('прощупываемся', 4),
  plural2ndPerson: Word('прощупываетесь', 4),
  plural3rdPerson: Word('прощупываются', 4),
  masculinePast: Word('прощупывался', 4),
  femininePast: Word('прощупывалась', 4),
  neuterPast: Word('прощупывалось', 4),
  pluralPast: Word('прощупывались', 4),
  imperativeInformal: Word('прощупывайся', 4),
  imperativeFormal: Word('прощупывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прощупываться.name.text, прощупываться);

export { прощупываться };