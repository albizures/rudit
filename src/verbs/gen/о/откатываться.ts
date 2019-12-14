import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откатываться: PerfectVerb = {
  name: Word('откатываться', 3),
  singular1stPerson: Word('откатываюсь', 3),
  singular2ndPerson: Word('откатываешься', 3),
  singular3rdPerson: Word('откатывается', 3),
  plural1stPerson: Word('откатываемся', 3),
  plural2ndPerson: Word('откатываетесь', 3),
  plural3rdPerson: Word('откатываются', 3),
  masculinePast: Word('откатывался', 3),
  femininePast: Word('откатывалась', 3),
  neuterPast: Word('откатывалось', 3),
  pluralPast: Word('откатывались', 3),
  imperativeInformal: Word('откатывайся', 3),
  imperativeFormal: Word('откатывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(откатываться.name.text, откатываться);

export { откатываться };