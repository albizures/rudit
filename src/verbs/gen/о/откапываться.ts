import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откапываться: PerfectVerb = {
  name: Word('откапываться', 3),
  singular1stPerson: Word('откапываюсь', 3),
  singular2ndPerson: Word('откапываешься', 3),
  singular3rdPerson: Word('откапывается', 3),
  plural1stPerson: Word('откапываемся', 3),
  plural2ndPerson: Word('откапываетесь', 3),
  plural3rdPerson: Word('откапываются', 3),
  masculinePast: Word('откапывался', 3),
  femininePast: Word('откапывалась', 3),
  neuterPast: Word('откапывалось', 3),
  pluralPast: Word('откапывались', 3),
  imperativeInformal: Word('откапывайся', 3),
  imperativeFormal: Word('откапывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(откапываться.name.text, откапываться);

export { откапываться };