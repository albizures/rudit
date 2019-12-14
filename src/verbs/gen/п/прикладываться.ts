import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикладываться: PerfectVerb = {
  name: Word('прикладываться', 5),
  singular1stPerson: Word('прикладываюсь', 5),
  singular2ndPerson: Word('прикладываешься', 5),
  singular3rdPerson: Word('прикладывается', 5),
  plural1stPerson: Word('прикладываемся', 5),
  plural2ndPerson: Word('прикладываетесь', 5),
  plural3rdPerson: Word('прикладываются', 5),
  masculinePast: Word('прикладывался', 5),
  femininePast: Word('прикладывалась', 5),
  neuterPast: Word('прикладывалось', 5),
  pluralPast: Word('прикладывались', 5),
  imperativeInformal: Word('прикладывайся', 5),
  imperativeFormal: Word('прикладывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(прикладываться.name.text, прикладываться);

export { прикладываться };